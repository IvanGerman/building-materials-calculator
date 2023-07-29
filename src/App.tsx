import React, { useEffect } from 'react';
import './App.css';
import basket from './assets/img/itemsplace.png'
import board from './assets/img/doska25-100.png'
import { preventDefaultObj } from './modules/preventDefaultObj';

function App() {

  useEffect(() => {

    const basketTargetZone: HTMLElement = document.querySelector('.basketTargetZone') as HTMLElement;
    const selectedItem: HTMLElement = document.querySelector('.selected-item-img') as HTMLElement;


    //add eventlistener to the selectedItem to recreate it at his previous place
    selectedItem.addEventListener('dblclick', () => {
      console.log('dblclick ');
      selectedItem.remove();
      const selectedItem2 = document.createElement("div")!;
      selectedItem2.className = "selected-item-img";
      selectedItem2.draggable = true;
      const img2 = document.createElement("img")!;
      img2.className = "selected-item-img2";
      img2.src = board;
      img2.alt = '';
      selectedItem2.prepend(img2);
      const selectedItem2Wrapper = document.querySelector('.single-selected-item')!; 
      selectedItem2Wrapper.prepend(selectedItem2);

      selectedItem2.addEventListener('dragstart', (event) => {
        console.log('selectedItem2.ondragstart'); 
        const currentToy: HTMLImageElement = event.target as HTMLImageElement;
        if (currentToy.tagName === 'IMG') {
        putItemToBasket(currentToy);
        console.log(currentToy);
        }
      })
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
      console.log('ll',currentToy.parentElement);
      }
    })


    function putItemToBasket(currentToyParentElement: HTMLElement) {
        
        console.log('putItemToBasket');
        function handleDrop2(event: MouseEvent) { console.log('handleDrop!!!');
  
          event.preventDefault();
          Object.assign(currentToyParentElement.style, {
          zIndex: '1000', position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
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

  let x = 1;

  return (
    <div className="App">
      <div className="single-selected-item">
        <p>Тёс (25мм) </p>
        <div className="selected-item-img" draggable="true">
          <img className="selected-item-img2" src={board} alt="" />
        </div>
        <label htmlFor="width">Выбрать ширину (мм):</label>
        <select id='width' name="width" size={x}>
          <option value="100">100</option>
          <option value="120">120</option>
          <option value="150">150</option>
          <option value="180">180</option>
          <option value="200">200</option>
        </select>
        <label htmlFor="length">Выбрать длину (метры):</label>
        <select id='length' name="length" size={x}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <label htmlFor="quantity">Количество:</label>
        <input type="number" id="quantity" name="quantity" placeholder="0" min="1" ></input>
      </div>
      <img src={basket} alt='' className="basket" useMap="#basket-map"/>
      <map  name="basket-map">
        <area className="basketTargetZone" shape="rect" coords="0,0,500,300" alt=''/>
      </map>
    </div>
  );
}

export default App;
