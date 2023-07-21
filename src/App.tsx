import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='./assets/basket.webh' alt='' className="basket" useMap="#basket-map"/>
      <map id="basket-map" name="basket-map">
        <area shape="rect" coords="0,0,82,126" alt="" />
      </map>
    </div>
  );
}

export default App;
