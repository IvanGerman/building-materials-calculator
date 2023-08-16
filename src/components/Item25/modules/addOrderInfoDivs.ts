//@ts-nocheck
export const addOrderInfoDivs = (currentToyParentElement, inputElementsClass) => {

  const orderInfoWrapper = document.createElement("div");
  orderInfoWrapper.className = `orderInfoWrapper${inputElementsClass}`;
  currentToyParentElement.appendChild(orderInfoWrapper);
  const itemSize = document.createElement("div");
  itemSize.className = `itemSize${inputElementsClass}`;
  currentToyParentElement.appendChild(itemSize);
  const itemVolume = document.createElement("div");
  itemVolume.className = `itemVolume${inputElementsClass}`;
  currentToyParentElement.appendChild(itemVolume);
  
};
