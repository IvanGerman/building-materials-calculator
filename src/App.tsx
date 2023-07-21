import React from 'react';
import './App.css';
import basket from './basket2.jpg'

function App() {
  return (
    <div className="App">
      <img src={basket} alt='bb' className="basket" useMap="#basket-map"/>
      <map id="basket-map" name="basket-map">
        <area shape="rect" coords="0,0,250,200" alt="" href='' />
      </map>
    </div>
  );
}

export default App;
