//@ts-nocheck
import React, { useEffect } from "react";

import styles from './ItemDataInputs.module.css';
 

const ItemDataInputs = (props) => { 

  useEffect(() => {


  }, [])
 
  return (
    <>
        <label htmlFor="width">Выбрать ширину (мм):</label>
        <select id='width' name="width" size={1}  className={props.dataItemName}>
          <option value="100">100</option>
          <option value="120">120</option>
          <option value="150">150</option>
          <option value="180">180</option>
          <option value="200">200</option>
          <option value="250">250</option>
        </select>
        <label htmlFor="length">Выбрать длину (метры):</label>
        <select id='length' name="length" size={1}  className={props.dataItemName} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <label htmlFor="quantity">Количество:</label>
        <input type="number" id="quantity" name="quantity" placeholder="0" min="1"  className={props.dataItemName} ></input>
    </>
  )

}

export default ItemDataInputs;

