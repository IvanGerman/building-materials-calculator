//@ts-nocheck

import { getDataFromInputs } from "./getDataFromInputs";
import { getResultVolume } from "./getResultVolume";

export const putDataToOrderInfoDivs = (infoDiv1: HTMLElement, infoDiv2: HTMLElement, infoDiv3: HTMLElement, inputElementsArray, itemThickness, inputElementsClass) => {

  infoDiv1!.innerHTML = `${getDataFromInputs(...inputElementsArray)[0]} шт.`;
  infoDiv2!.innerHTML = `${itemThickness}*${getDataFromInputs(...inputElementsArray)[1]}*${getDataFromInputs(...inputElementsArray)[2]}000`;

  let volume = Number(getDataFromInputs(...inputElementsArray, itemThickness)[3]).toFixed(2);
  
  infoDiv3!.innerHTML = `${volume} м3`;
  getResultVolume(inputElementsClass, volume);
};
