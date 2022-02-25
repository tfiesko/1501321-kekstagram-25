function getRand(minNumber, maxNumber) {
  return Math.floor(Math.random() * Math.abs((maxNumber - minNumber)) + Math.min(maxNumber, minNumber) );
}


function checkStringLength(checkedString, stringLength) {
  return (checkedString.length <= stringLength);
}


console.log(checkStringLength('100' , 3));
console.log('Получилось ' + getRand(0, 100));
