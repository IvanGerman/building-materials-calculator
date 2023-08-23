import React, { useEffect }  from "react";

import styles from './Basket.module.css';
import basket from './../../assets/img/itemsplace.png'
import { preventDefaultObj } from "../../modules/preventDefaultObj";


const Basket = () => { 

  useEffect(() => {
    const basketTargetZoneForExp: HTMLElement = document.querySelector(`.${styles.basketTargetZone}`) as HTMLElement;

    basketTargetZoneForExp.ondragover = preventDefaultObj.handleOver;
    basketTargetZoneForExp.ondragenter = preventDefaultObj.handleEnter;
    basketTargetZoneForExp.ondragleave = preventDefaultObj.handleLeave;
    basketTargetZoneForExp.ondrop = preventDefaultObj.handleDrop;

    basketTargetZone = basketTargetZoneForExp;
  })
  
  return (
    <>
      <img src={basket} alt='' className={styles.basket} useMap="#basket-map"/>
      <map  name="basket-map">
        <area className={styles.basketTargetZone} id='basketTargetZone' shape="rect" coords="0,0,800,300" alt=''/>
      </map>
    </>
  )
};


export default Basket;
export let basketTargetZone: HTMLElement;