//@ts-nocheck

import { getDataFromInputs } from "./getDataFromInputs";

export const putDataToOrderInfoDivs = (infoDiv1: HTMLElement, infoDiv2: HTMLElement, infoDiv3: HTMLElement, inputElementsArray, itemThickness) => {

  infoDiv1!.innerHTML = `${getDataFromInputs(...inputElementsArray)[0]} шт.`;
  infoDiv2!.innerHTML = `${itemThickness}*${getDataFromInputs(...inputElementsArray)[1]}*${getDataFromInputs(...inputElementsArray)[2]}000`;
  infoDiv3!.innerHTML = `${Number(getDataFromInputs(...inputElementsArray, itemThickness)[3]).toFixed(2)} м3`;
};
