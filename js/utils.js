const getRand = (minNumber, maxNumber) =>
  Math.floor(Math.random() * Math.abs((maxNumber - minNumber)) + Math.min(maxNumber, minNumber) );

const checkStringLength = (checkedString, stringLength) =>
  (checkedString.length <= stringLength);

const isEscapeKey = (evt) =>
  evt.key === 'Escape';

export {isEscapeKey};
export {getRand};
export {checkStringLength};
