//@ts-nocheck
import React, { useEffect } from "react";

import styles from './ItemDescription.module.css';
import doska25 from './../../assets/img/doska25tr.png';
import doska50 from './../../assets/img/doska50tr.png';
import brusok50 from './../../assets/img/brusok50tr.png';
import brus100 from './../../assets/img/brus100tr.png';
import brus150 from './../../assets/img/brus150tr.png';
import brus200 from './../../assets/img/brus200tr.png';

const imagesObj = {
  'board-25': doska25,
  'board-50': doska50,
  'bar-50': brusok50,
  'timber-100': brus100,
  'timber-150': brus150,
  'timber-200': brus200
}

const ItemDescription = (props) => { 

  useEffect(() => {

    
  }, [])
 
  return (
    <>
        <p data-thickness={props.itemThickness}>{props.itemName}</p>
        <div className={styles.selectedItemImg} data-itemname={props.dataItemName} draggable="true">
          <img className={styles.selectedItemImg2} src={imagesObj[props.dataItemName]} alt="" />
        </div>
    </>
  )

}

export default ItemDescription;
