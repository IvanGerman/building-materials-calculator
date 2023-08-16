//@ts-nocheck
export const placeItemAfterDrop = (event, item) => {
  item.style.zIndex = '1000';
  Object.assign(item.style, {
    position: 'absolute', left: `${event.clientX - 40}px`, top: `${event.clientY - 40}px`,
  });
}