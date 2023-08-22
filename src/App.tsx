//@ts-nocheck
import React, { useEffect } from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Item25 from './components/Item25/Item25';
import { state } from './state';

function App() {

  useEffect( () => {
    
    
  }, [])

  return (
    <div className="App">
      
      <div className="volumeResult"></div>
      <div className="singleSelectedItemContainer">
        <Item25 itemName={state.board25[0]} itemThickness={state.board25[1]} dataItemName={state.board25[2]}/>
        <Item25 itemName={state.bar50[0]} itemThickness={state.bar50[1]} dataItemName={state.bar50[2]}/>
        <Item25 itemName={state.board50[0]} itemThickness={state.board50[1]} dataItemName={state.board50[2]}/>
      </div>
      <Basket/>
      <div className="singleSelectedItemContainer">
        <Item25 itemName={state.timber100[0]} itemThickness={state.timber100[1]} dataItemName={state.timber100[2]}/>
        <Item25 itemName={state.timber150[0]} itemThickness={state.timber150[1]} dataItemName={state.timber150[2]}/>
        <Item25 itemName={state.timber200[0]} itemThickness={state.timber200[1]} dataItemName={state.timber200[2]}/>
      </div>
      
    </div>
  );
}

export default App;
