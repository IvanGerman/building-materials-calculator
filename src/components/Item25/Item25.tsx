import React from "react";

import styles from './Item25.module.css';
import board from './../../assets/img/doska25-100.png'


const Item25 = () => { 

// this is how to select html element by class using css-modules: 
// document.querySelector(`.${styles.updateMenu}`)
// const updateMenu = document.querySelector(`.${styles.updateMenu}`);



  
  return (
    <div className={styles.singleSelectedItem}>
        <p>Тёс (25мм) </p>
        <div className={styles.selectedItemImg} draggable="true">
          <img className={styles.selectedItemImg2} src={board} alt="" />
        </div>
        <label htmlFor="width">Выбрать ширину (мм):</label>
        <select id='width' name="width" size={1}>
          <option value="100">100</option>
          <option value="120">120</option>
          <option value="150">150</option>
          <option value="180">180</option>
          <option value="200">200</option>
          <option value="250">250</option>
        </select>
        <label htmlFor="length">Выбрать длину (метры):</label>
        <select id='length' name="length" size={1}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <label htmlFor="quantity">Количество:</label>
        <input type="number" id="quantity" name="quantity" placeholder="0" min="1" ></input>
      </div>
  )
}

export default Item25;

