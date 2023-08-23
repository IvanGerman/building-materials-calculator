//@ts-nocheck
//need thickness value
export const getDataFromInputs = (widthInp, lengthInp, quantityInp, itemThickness) => {
  let quantity;
  let width;
  let length;
  if (quantityInp) { quantity = quantityInp.value }
  if (lengthInp) { length = lengthInp.value }
  if (widthInp) { width = widthInp.value }
 
  let volume = ((Number(length) * 1000) * Number(width) * Number(itemThickness) * Number(quantity)) / 1000000000;

  return [ quantity, width, length , volume];
};