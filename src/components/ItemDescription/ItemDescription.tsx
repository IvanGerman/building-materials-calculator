import React, { useEffect } from "react";

import styles from './ItemDescription.module.css';
import board from './../../assets/img/doska25-100.png'


const ItemDescription = () => { 

  useEffect(() => {

    const selectedItemForExp: HTMLElement = document.querySelector(`.${styles.selectedItemImg}`) as HTMLElement;
    selectedItem = selectedItemForExp;
  })
 
  return (
    <>
        <p data-thickness='25'> Тёс (25мм) </p>
        <div className={styles.selectedItemImg} draggable="true">
          <img className={styles.selectedItemImg2} src={board} alt="" />
        </div>
    </>
  )

}

export default ItemDescription;
export let selectedItem: HTMLElement;

