//@ts-nocheck
import React, { useEffect } from "react";

import styles from './ItemDescription.module.css';
import board from './../../assets/img/doska25-100.png'


const ItemDescription = (props) => { 

  useEffect(() => {

    const selectedItemForExp: HTMLElement = document.querySelector(`.${styles.selectedItemImg}`) as HTMLElement;
    selectedItem = selectedItemForExp;

    console.log('555-', selectedItem.getAttribute("data-itemname"));
    
  })
 
  return (
    <>
        <p data-thickness={props.itemThickness}>{props.itemName}</p>
        <div className={styles.selectedItemImg} data-itemname={props.dataItemName} draggable="true">
          <img className={styles.selectedItemImg2} src={board} alt="" />
        </div>
    </>
  )

}

export default ItemDescription;
export let selectedItem: HTMLElement;

