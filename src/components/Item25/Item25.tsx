//@ts-nocheck
import React, { useEffect } from "react";

import styles from './Item25.module.css';
import { basketTargetZone } from "../Basket/Basket";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDataInputs from "../ItemDataInputs/ItemDataInputs";
import { placeItemAfterDrop } from "./modules/placeItemAfterDrop";
import { addOrderInfoDivs } from "./modules/addOrderInfoDivs";
import { putDataToOrderInfoDivs } from "./modules/putDataToOrderInfoDivs";


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

        //adding eventlistener to the basket to handle item drop event
        console.log('putItemToBasket');
        basketTargetZone.ondrop = handleDrop2;


        function handleDrop2(event: MouseEvent)  { console.log('handleDrop!!!');

          event.preventDefault();

          //here we take input elements (corresponding to droped item)
          let inputElementsClass = currentToyParentElement.getAttribute("data-itemname");
          const singleItemAllInputs = document.querySelectorAll(`.${inputElementsClass}`);
          let itemThickness = inputElementsClass.substring(5);
          

          //place item inside the basket after drop
          placeItemAfterDrop (event, currentToyParentElement);
          
          // handle case when Item is Inside of Basket and we change values in our inputs
          singleItemAllInputs.forEach((elem) => {
              elem.addEventListener('change', () => {
                if (currentToyParentElement.children.length > 1) {
                    const orderInfoWrapper: HTMLElement = document.querySelector(`.orderInfoWrapper${inputElementsClass}`)!;
                    const itemSize: HTMLElement = document.querySelector(`.itemSize${inputElementsClass}`)!;
                    const itemVolume: HTMLElement = document.querySelector(`.itemVolume${inputElementsClass}`)!;
                    putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume, singleItemAllInputs, itemThickness);
                  }           
              })
            })
          
          //add divs with order info
          if (currentToyParentElement.children.length <= 1) {
            addOrderInfoDivs(currentToyParentElement, inputElementsClass);
          }

          //put data to order info divs
          if (currentToyParentElement.children.length > 1) {
            const orderInfoWrapper: HTMLElement = document.querySelector(`.orderInfoWrapper${inputElementsClass}`)!;
            const itemSize: HTMLElement = document.querySelector(`.itemSize${inputElementsClass}`)!;
            const itemVolume: HTMLElement = document.querySelector(`.itemVolume${inputElementsClass}`)!;
            putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume, singleItemAllInputs, itemThickness);
          }     
        }; 
      };
    }); 
  })

  
  return (
    <div className={styles.singleSelectedItem}>
        
        <ItemDescription itemName={props.itemName} itemThickness={props.itemThickness} dataItemName={props.dataItemName}/>
        <ItemDataInputs itemName={props.itemName} dataItemName={props.dataItemName}/>
        
    </div>
  )
}

export default Item25;

