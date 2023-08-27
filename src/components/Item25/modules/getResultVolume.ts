//@ts-nocheck

export const resultVolumeObj = {
  'board-25': 0,
  'board-50': 0,
  'bar-50': 0,
  'timber-100': 0,
  'timber-150': 0,
  'timber-200': 0
};

export const getResultVolume = (currentItem, volume) => {

  const volumeResult = document.querySelector('.volumeResult');
  let finalVolume;

  resultVolumeObj[currentItem] = volume;
  const sumValues = obj => Object.values(obj).reduce((a, b) => Number(a) + Number(b), 0);
  finalVolume = sumValues(resultVolumeObj).toFixed(2); 
  
  volumeResult.innerHTML = `${finalVolume} м3`;
  
  
};
