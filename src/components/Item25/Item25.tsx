//@ts-nocheck
import React, { useEffect } from "react";

import styles from './Item25.module.css';
import { basketTargetZone } from "../Basket/Basket";
import ItemDescription from "../ItemDescription/ItemDescription";
import ItemDataInputs, { lengthInput, quantityInput, widthInput } from "../ItemDataInputs/ItemDataInputs";


const Item25 = (props) => { 

  useEffect(() => {

    const singleSelectedItemContainer = document.querySelector('.singleSelectedItemContainer');
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
          [quantityInput, widthInput, lengthInput].forEach((elem) => {
            elem.addEventListener('change', () => {
              if ( isItemInsideBasket === true ) {
                console.log('adjustQuantity');
                const orderInfoWrapper: HTMLElement = document.querySelector('.orderInfoWrapper')!;
                const itemSize: HTMLElement = document.querySelector('.itemSize')!;
                const itemVolume: HTMLElement = document.querySelector('.itemVolume')!;
                putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume);
              }
              return
            })
          })
          
        }
        

        
        //add divs with order info
        console.log('currentToyParentElement.children--',currentToyParentElement.children);
        if (currentToyParentElement.children.length <= 1) {
          const orderInfoWrapper = document.createElement("div");
          orderInfoWrapper.className = "orderInfoWrapper";
          currentToyParentElement.appendChild(orderInfoWrapper);
          const itemSize = document.createElement("div");
          itemSize.className = "itemSize";
          currentToyParentElement.appendChild(itemSize);
          const itemVolume = document.createElement("div");
          itemVolume.className = "itemVolume";
          currentToyParentElement.appendChild(itemVolume);
        }

        //put input data inside of order info divs
        const putDataToOrderInfoDivs = (infoDiv1: HTMLElement, infoDiv2: HTMLElement, infoDiv3: HTMLElement) => {
          infoDiv1!.innerHTML = `${getDataFromInputs()[0]} шт.`;
          infoDiv2!.innerHTML = `25*${getDataFromInputs()[1]}*${getDataFromInputs()[2]}000`;
          infoDiv3!.innerHTML = `${Number(getDataFromInputs()[3]).toFixed(2)} м3`;
        }
        if (currentToyParentElement.children.length > 1) {
          const orderInfoWrapper: HTMLElement = document.querySelector('.orderInfoWrapper')!;
          const itemSize: HTMLElement = document.querySelector('.itemSize')!;
          const itemVolume: HTMLElement = document.querySelector('.itemVolume')!;
          putDataToOrderInfoDivs(orderInfoWrapper, itemSize, itemVolume);
        }
     
      };

      basketTargetZone.ondrop = handleDrop2;
      
    }
    
  })



  
  return (
    <div className={styles.singleSelectedItem}>
        
        <ItemDescription itemName={props.itemName} itemThickness={props.itemThickness}/>
        <ItemDataInputs/>
        
    </div>
  )
}

export default Item25;

