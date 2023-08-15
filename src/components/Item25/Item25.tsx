//@ts-nocheck
import React, { useEffect } from "react";

import styles from './Item25.module.css';
import { basketTargetZone } from "../Basket/Basket";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDataInputs from "../ItemDataInputs/ItemDataInputs";


const Item25 = (props) => { 

  useEffect(() => {

    const singleSelectedItemContainer = document.querySelector('.singleSelectedItemContainer');
    let isItemInsideBasket: boolean;

    // taking data from input/select elements
      
    const getDataFromInputs = (widthInp, lengthInp, quantityInp) => {
      let quantity;
      let width;
      let length;
      if (quantityInp) { quantity = quantityInp.value }
      if (lengthInp) { length = lengthInp.value }
      if (widthInp) { width = widthInp.value }
     
      let volume = ((Number(length) * 1000) * Number(width) * 25 * Number(quantity)) / 1000000000;

      return [ quantity, width, length , volume];
    }  
    

    singleSelectedItemContainer.addEventListener('dragstart', (event) => {
      console.log('singleSelectedItemContainer.ondragstart'); 
      const currentToy: HTMLImageElement = event.target as HTMLImageElement;
      if (currentToy.tagName === 'IMG') {
      const currentToyParentElement = currentToy.parentElement!;

      //add eventlistener to the currentToyParentElement to move it to his previous place on double click
      currentToyParentElement.addEventListener('dblclick', () => {
      while (currentToyParentElement.childNodes.length > 1) {
        currentToyParentElement.removeChild(currentToyParentElement.lastChild!);
      }
      Object.assign(currentToyParentElement.style, {
        position: 'static'
      });
      isItemInsideBasket = false
    });

      putItemToBasket(currentToyParentElement);
      }
    });

    function putItemToBasket(currentToyParentElement: HTMLElement) {

        
      console.log('putItemToBasket');
      function handleDrop2(event: MouseEvent) { console.log('handleDrop!!!');

        //here we take inputs elements and their data
        let inputElementsClass = currentToyParentElement.getAttribute("data-itemname");
        let itemThickness = inputElementsClass.slice(-2);
        const singleItemAllInputs = document.querySelectorAll(`.${inputElementsClass}`);
        
        
        getDataFromInputs( singleItemAllInputs[0], singleItemAllInputs[1], singleItemAllInputs[2] );
        
        isItemInsideBasket = true;

        event.preventDefault();
        currentToyParentElement.style.zIndex = '1000';
        Object.assign(currentToyParentElement.style, {
         position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
        });
        
        
        // handle case when isItemInsideBasket = true and we change values in our inputs
        // it should be handled only when isItemInsideBasket = true, 
        // if isItemInsideBasket is becoming false we must remove eventlist.
        if ( isItemInsideBasket === true ) {
          [singleItemAllInputs[2], singleItemAllInputs[0], singleItemAllInputs[1]].forEach((elem) => {
            elem.addEventListener('change', () => {
              if ( isItemInsideBasket === true ) {
                const orderInfoWrapper: HTMLElement = document.querySelector(`.orderInfoWrapper${inputElementsClass}`)!;
                const itemSize: HTMLElement = document.querySelector(`.itemSize${inputElementsClass}`)!;
                const itemVolume: HTMLElement = document.querySelector(`.itemVolume${inputElementsClass}`)!;
                putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume);
              }
              return
            })
          })
          
        }
        

        
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

