import React from "react";

import styles from './Basket.module.css';
import basket from './../../assets/img/itemsplace.png'


const Basket = () => { 

// this is how to select html element by class using css-modules: 
// document.querySelector(`.${styles.updateMenu}`)
// const updateMenu = document.querySelector(`.${styles.updateMenu}`);
  
  return (
    <>
      <img src={basket} alt='' className={styles.basket} useMap="#basket-map"/>
      <map  name="basket-map">
        <area className={styles.basketTargetZone} shape="rect" coords="0,0,500,300" alt=''/>
      </map>
    </>
  )
}

export default Basket;
