import React, { useEffect } from "react";

import styles from './Item25.module.css';
import { basketTargetZone } from "../Basket/Basket";
import ItemDescription, { selectedItem } from "../ItemDescription/ItemDescription";
import ItemDataInputs, { lengthInput, quantityInput, widthInput } from "../ItemDataInputs/ItemDataInputs";


const Item25 = () => { 

  useEffect(() => {

    let isItemInsideBasket: boolean;

    // taking data from input/select elements
      
    const getDataFromInputs = () => {
      let quantity = quantityInput.value;
      let width = widthInput.value;
      let length = lengthInput.value;
      console.log(quantity);
      console.log(width);
      console.log(length);
      let volume = ((Number(length) * 1000) * Number(width) * 25 * Number(quantity)) / 1000000000;
      console.log('Объём заказа в кубических метрах = ', volume);

      return [ quantity, width, length , volume];
    }  
    

    selectedItem.addEventListener('dragstart', (event) => {
      console.log('selectedItem.ondragstart'); 
      const currentToy: HTMLImageElement = event.target as HTMLImageElement;
      if (currentToy.tagName === 'IMG') {
      const currentToyParentElement = currentToy.parentElement!;
      putItemToBasket(currentToyParentElement);
      }
    });

    function putItemToBasket(currentToyParentElement: HTMLElement) {

        
      console.log('putItemToBasket');
      function handleDrop2(event: MouseEvent) { console.log('handleDrop!!!');

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
          quantityInput.addEventListener('change', () => {
            if ( isItemInsideBasket === true ) {
              console.log('adjustQuantity');
              const orderInfoWrapper: HTMLElement = document.querySelector('.orderInfoWrapper')!;
              putDataToOrderInfoDivs(orderInfoWrapper);
            }
            return
          })
        }
        

        
        //add divs with order info
        console.log('currentToyParentElement.children--',currentToyParentElement.children);
        if (currentToyParentElement.children.length <= 1) {
          const orderInfoWrapper = document.createElement("div");
          orderInfoWrapper.className = "orderInfoWrapper";
          //orderInfoWrapper.innerHTML = `${getDataFromInputs()} шт.`;
          currentToyParentElement.appendChild(orderInfoWrapper);
        }

        //put input data inside of order info divs
        const putDataToOrderInfoDivs = (infoDiv1: HTMLElement) => {
          infoDiv1!.innerHTML = `${getDataFromInputs()[0]} шт.`;
        }
        if (currentToyParentElement.children.length > 1) {
          const orderInfoWrapper: HTMLElement = document.querySelector('.orderInfoWrapper')!;
          putDataToOrderInfoDivs(orderInfoWrapper);
        }
     
      };

      basketTargetZone.ondrop = handleDrop2;
      
    }

    //add eventlistener to the selectedItem to move it to his previous place on double click
    selectedItem.addEventListener('dblclick', () => {
      while (selectedItem.childNodes.length > 1) {
        selectedItem.removeChild(selectedItem.lastChild!);
      }
      Object.assign(selectedItem.style, {
        position: 'static'
      });
      isItemInsideBasket = false
    });
    
  })



  
  return (
    <div className={styles.singleSelectedItem}>
        
        <ItemDescription/>
        <ItemDataInputs/>
        
    </div>
  )
}

export default Item25;

