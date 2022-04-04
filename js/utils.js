const getRand = (minNumber, maxNumber) =>
  Math.floor(Math.random() * Math.abs((maxNumber - minNumber)) + Math.min(maxNumber, minNumber) );

const checkStringLength = (checkedString, stringLength) =>
  (checkedString.length <= stringLength);

export {getRand};
export {checkStringLength};
