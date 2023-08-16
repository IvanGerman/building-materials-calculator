//@ts-nocheck
export const getDataFromInputs = (widthInp, lengthInp, quantityInp) => {
  let quantity;
  let width;
  let length;
  if (quantityInp) { quantity = quantityInp.value }
  if (lengthInp) { length = lengthInp.value }
  if (widthInp) { width = widthInp.value }
 
  let volume = ((Number(length) * 1000) * Number(width) * 25 * Number(quantity)) / 1000000000;

  return [ quantity, width, length , volume];
};


export const placeItemAfterDrop = (event, item) => {
  item.style.zIndex = '1000';
  Object.assign(item.style, {
    position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
  });
}