const uploadPopup = document.querySelector('.img-upload__overlay');

uploadPopup.classList.remove('hidden');

const imgUploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'text__hashtags-container',
  errorTextParent: 'text__hashtags-container',
  errorTextClass: 'error-text',
  errorTextTag: 'span'
});

const isRepeatingElements = (inspectedArray) => {
  for(let i = 0; i < inspectedArray.length; i++){
    if(inspectedArray.includes(inspectedArray[i], i + 1)){
      return true;
    }
  }
  return false;
};

const validateHashtag = (value) => {
  value = value.toLowerCase();
  value = value.trim();
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  const hashtagArray = value.split(' ');
  if(isRepeatingElements(hashtagArray)){
    return false;
  }
  if(hashtagArray.length > 5) {
    return false;
  }
  for(let hashtag of hashtagArray) {
    if(!re.test(hashtag)) {
      return false;
    }
  }
  return true;
};

pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег невалиден');

const textHashtag = document.querySelector('.text__hashtags');

const submitButton = document.querySelector('.img-upload__submit');

submitButton.addEventListener('click', (evt) => {
  if(!validateHashtag(textHashtag.value)) {
    evt.preventDefault();
  }
});

imgUploadForm.addEventListener('submit', () => {

});
