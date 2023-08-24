//@ts-nocheck

export const getResultVolume = (currentItem, volume) => {

  console.log('getResultVolume');
  const volumeResult = document.querySelector('.volumeResult');
  console.log(volumeResult);
  volumeResult.innerHTML = volume;
  
  
};
