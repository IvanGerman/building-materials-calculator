//@ts-nocheck
import React, { useEffect } from "react";

import styles from './ItemDescription.module.css';
import board from './../../assets/img/doska25-100.png'


const ItemDescription = (props) => { 

  useEffect(() => {

    
  }, [])
 
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
