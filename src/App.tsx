//@ts-nocheck
import React from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Item25 from './components/Item25/Item25';
import { state } from './state';

function App() {

  return (
    <div className="App">
      
      <div className="singleSelectedItemContainer">
        <Item25 itemName={state.board25[0]} itemThickness={state.board25[1]} />
        <Item25 itemName={state.board50[0]} itemThickness={state.board50[1]} />
      </div>
      <Basket/>
      
    </div>
  );
}

export default App;
