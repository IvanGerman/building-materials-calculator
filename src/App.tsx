import React, { useEffect } from 'react';
import './App.css';
import { preventDefaultObj } from './modules/preventDefaultObj';
import Basket, { v } from './components/Basket/Basket';
import Item25 from './components/Item25/Item25';

import styles from './components/Basket/Basket.module.css';
import styles2 from './components/Item25/Item25.module.css';

function App() {

  useEffect(() => {

    const basketTargetZone: HTMLElement = document.querySelector(`.${styles.basketTargetZone}`) as HTMLElement;
    console.log('v', v );
    
    const selectedItem: HTMLElement = document.querySelector(`.${styles2.selectedItemImg}`) as HTMLElement;
  

    //add eventlistener to the selectedItem to move it to his previous place on double click
    selectedItem.addEventListener('dblclick', () => {
      while (selectedItem.childNodes.length > 1) {
        selectedItem.removeChild(selectedItem.lastChild!);
      }
      Object.assign(selectedItem.style, {
        position: 'static'
      });
    })
    

    // taking data from input/select elements
    const quantityInput: HTMLInputElement = document.querySelector('#quantity') as HTMLInputElement;
    const widthSelect: HTMLInputElement = document.querySelector('#width') as HTMLInputElement;
    const lengthSelect: HTMLInputElement = document.querySelector('#length') as HTMLInputElement;
    
    selectedItem.addEventListener('dragstart', (event) => {
      console.log('selectedItem.ondragstart'); 
      const currentToy: HTMLImageElement = event.target as HTMLImageElement;
      if (currentToy.tagName === 'IMG') {
      const currentToyParentElement = currentToy.parentElement!;
      putItemToBasket(currentToyParentElement);
      }
    })


    function putItemToBasket(currentToyParentElement: HTMLElement) {
        
        console.log('putItemToBasket');
        function handleDrop2(event: MouseEvent) { console.log('handleDrop!!!');
  
          event.preventDefault();
          currentToyParentElement.style.zIndex = '1000';
          Object.assign(currentToyParentElement.style, {
           position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
          });

          //add divs with order info
          console.log('currentToyParentElement.children--',currentToyParentElement.children);
          if (currentToyParentElement.children.length <= 1) {
            const orderInfoWrapper = document.createElement("div");
            orderInfoWrapper.className = "orderInfoWrapper";
            orderInfoWrapper.innerHTML = `${quantity} шт.`;
            currentToyParentElement.appendChild(orderInfoWrapper);
          }
       
        };

        basketTargetZone.ondrop = handleDrop2;

        let quantity = quantityInput.value;
        let width = widthSelect.value;
        let length = lengthSelect.value;
        console.log(quantity);
        console.log(width);
        console.log(length);
        let volume = ((Number(length) * 1000) * Number(width) * 25 * Number(quantity)) / 1000000000;
        console.log('Объём заказа в кубических метрах = ', volume);
      }
    
      
    
      basketTargetZone.ondragover = preventDefaultObj.handleOver;
      basketTargetZone.ondragenter = preventDefaultObj.handleEnter;
      basketTargetZone.ondragleave = preventDefaultObj.handleLeave;
      basketTargetZone.ondrop = preventDefaultObj.handleDrop;
    
    
  });


  return (
    <div className="App">

      <Item25/>
      <Basket/>
      
    </div>
  );
}

export default App;
