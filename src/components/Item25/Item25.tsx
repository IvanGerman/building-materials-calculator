//@ts-nocheck
import React, { useEffect } from "react";

import styles from './Item25.module.css';
import { basketTargetZone } from "../Basket/Basket";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDataInputs from "../ItemDataInputs/ItemDataInputs";
import { getDataFromInputs, placeItemAfterDrop } from "./modules";


const Item25 = (props) => { 

  useEffect(() => {

    const singleSelectedItemContainer = document.querySelector('.singleSelectedItemContainer');
      
    //adding eventlistener for starting to drag the item to the basket
    singleSelectedItemContainer.addEventListener('dragstart', (event) => {
      console.log('singleSelectedItemContainer.ondragstart'); 
      const currentToy: HTMLImageElement = event.target as HTMLImageElement;

      if (currentToy.tagName === 'IMG') {
        const currentToyParentElement = currentToy.parentElement!;
      

        //adding eventlistener to the item to move it to his previous place on double click
        currentToyParentElement.addEventListener('dblclick', () => {
        while (currentToyParentElement.childNodes.length > 1) {
          currentToyParentElement.removeChild(currentToyParentElement.lastChild!);
        }
        Object.assign(currentToyParentElement.style, {
          position: 'static'
        });
        });

        putItemToBasket(currentToyParentElement);
      };

    });



    function putItemToBasket(currentToyParentElement: HTMLElement) {

        
      console.log('putItemToBasket');
      function handleDrop2(event: MouseEvent) { console.log('handleDrop!!!');

        event.preventDefault();
        //here we take input elements and their data
        let inputElementsClass = currentToyParentElement.getAttribute("data-itemname");
        const singleItemAllInputs = document.querySelectorAll(`.${inputElementsClass}`);
        getDataFromInputs( singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2] );
        let itemThickness = inputElementsClass.slice(-2);
        

        //place item inside the basket after drop
        placeItemAfterDrop(event, currentToyParentElement);
        
        // handle case when Item is Inside of Basket and we change values in our inputs
        [singleItemAllInputs[2], singleItemAllInputs[0], singleItemAllInputs[1]].forEach((elem) => {
            elem.addEventListener('change', () => {
              if (currentToyParentElement.children.length > 1) {
                  const orderInfoWrapper: HTMLElement = document.querySelector(`.orderInfoWrapper${inputElementsClass}`)!;
                  const itemSize: HTMLElement = document.querySelector(`.itemSize${inputElementsClass}`)!;
                  const itemVolume: HTMLElement = document.querySelector(`.itemVolume${inputElementsClass}`)!;
                  putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume);
                }           
            })
          })
        
        //add divs with order info
        if (currentToyParentElement.children.length <= 1) {
          const orderInfoWrapper = document.createElement("div");
          orderInfoWrapper.className = `orderInfoWrapper${inputElementsClass}`;
          currentToyParentElement.appendChild(orderInfoWrapper);
          const itemSize = document.createElement("div");
          itemSize.className = `itemSize${inputElementsClass}`;
          currentToyParentElement.appendChild(itemSize);
          const itemVolume = document.createElement("div");
          itemVolume.className = `itemVolume${inputElementsClass}`;
          currentToyParentElement.appendChild(itemVolume);
        }

        //put input data inside of order info divs
        const putDataToOrderInfoDivs = (infoDiv1: HTMLElement, infoDiv2: HTMLElement, infoDiv3: HTMLElement) => {

          //here put instead of getDataFromInputs already counted data (like currentQuantity)
          infoDiv1!.innerHTML = `${getDataFromInputs(singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2])[0]} шт.`;
          infoDiv2!.innerHTML = `${itemThickness}*${getDataFromInputs(singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2])[1]}*${getDataFromInputs(singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2])[2]}000`;
          infoDiv3!.innerHTML = `${Number(getDataFromInputs(singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2])[3]).toFixed(2)} м3`;
        }
        if (currentToyParentElement.children.length > 1) {
          const orderInfoWrapper: HTMLElement = document.querySelector(`.orderInfoWrapper${inputElementsClass}`)!;
          const itemSize: HTMLElement = document.querySelector(`.itemSize${inputElementsClass}`)!;
          const itemVolume: HTMLElement = document.querySelector(`.itemVolume${inputElementsClass}`)!;
          putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume);
        }
     
      };

      basketTargetZone.ondrop = handleDrop2;
      
    }
    
  })



  
  return (
    <div className={styles.singleSelectedItem}>
        
        <ItemDescription itemName={props.itemName} itemThickness={props.itemThickness} dataItemName={props.dataItemName}/>
        <ItemDataInputs itemName={props.itemName} dataItemName={props.dataItemName}/>
        
    </div>
  )
}

export default Item25;

