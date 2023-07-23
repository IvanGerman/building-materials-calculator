import React, { useEffect } from 'react';
import './App.css';
import basket from './assets/img/basket2.jpg'
import board from './assets/img/doska25-100.png'

function App() {

  useEffect(() => {
    const selectedBoard: HTMLElement = document.querySelector('.selected-item-img') as HTMLElement;
    console.log(selectedBoard);
    selectedBoard.ondragstart = function callback(event) {
      console.log('selectedBoard.ondragstart');
    };

      function handleOver(event: Event) {
        event.preventDefault();
        console.log('handleOver');
        
      }
    
      function handleLeave(event: Event) {
        event.preventDefault();
        console.log('handleLeave');
      }
    
      function handleEnter(event: Event) {
        event.preventDefault();
        console.log('handleEnter');
      }
    
      function handleDrop(event: Event) {
        event.preventDefault();
        console.log('handleDrop');
      }
    
      const basketTargetZone: HTMLElement = document.querySelector('.basket') as HTMLElement;
    
      basketTargetZone.ondragover = handleOver;
      basketTargetZone.ondragenter = handleEnter;
      basketTargetZone.ondragleave = handleLeave;
      basketTargetZone.ondrop = handleDrop;
    
    
  }, []);

  return (
    <div className="App">
      <div className="single-selected-item">
        <img className="selected-item-img" src={board} alt="" draggable="true"/>
      </div>
      <img src={basket} alt='bb' className="basket" useMap="#basket-map"/>
      <map id="basket-map" name="basket-map">
        <area shape="rect" coords="0,0,250,200" alt="" href='' />
      </map>
    </div>
  );
}

export default App;
