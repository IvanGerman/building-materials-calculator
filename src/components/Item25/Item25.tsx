import React, { useEffect } from "react";

import styles from './Item25.module.css';
import board from './../../assets/img/doska25-100.png'
import { basketTargetZone } from "../Basket/Basket";


const Item25 = () => { 

  useEffect(() => {

    const selectedItem: HTMLElement = document.querySelector(`.${styles.selectedItemImg}`) as HTMLElement;
    const quantityInput: HTMLInputElement = document.querySelector('#quantity') as HTMLInputElement;
    const widthSelect: HTMLInputElement = document.querySelector('#width') as HTMLInputElement;
    const lengthSelect: HTMLInputElement = document.querySelector('#length') as HTMLInputElement;

    // taking data from input/select elements
      
    const getDataFromInputs = () => {
      let quantity = quantityInput.value;
      let width = widthSelect.value;
      let length = lengthSelect.value;
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

        event.preventDefault();
        currentToyParentElement.style.zIndex = '1000';
        Object.assign(currentToyParentElement.style, {
         position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
        });
        
        
        // handle case when isItemInsideBasket = true and we change values in our inputs
        // it should be handled only when isItemInsideBasket = true, 
        // if isItemInsideBasket is becoming false we must remove eventlist.
        quantityInput.addEventListener('change', () => {
          console.log('adjustQuantity');
          const orderInfoWrapper: HTMLElement = document.querySelector('.orderInfoWrapper')!;
          putDataToOrderInfoDivs(orderInfoWrapper);
        })

        
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
    });


    
    
  })



  
  return (
    <div className={styles.singleSelectedItem}>
        <p>Тёс (25мм) </p>
        <div className={styles.selectedItemImg} draggable="true">
          <img className={styles.selectedItemImg2} src={board} alt="" />
        </div>
        <label htmlFor="width">Выбрать ширину (мм):</label>
        <select id='width' name="width" size={1}>
          <option value="100">100</option>
          <option value="120">120</option>
          <option value="150">150</option>
          <option value="180">180</option>
          <option value="200">200</option>
          <option value="250">250</option>
        </select>
        <label htmlFor="length">Выбрать длину (метры):</label>
        <select id='length' name="length" size={1}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <label htmlFor="quantity">Количество:</label>
        <input type="number" id="quantity" name="quantity" placeholder="0" min="1" ></input>
      </div>
  )
}

export default Item25;

