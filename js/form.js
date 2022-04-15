const uploadPopup = document.querySelector('.img-upload__overlay');

uploadPopup.classList.remove('hidden');

const imgUploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imgUploadForm, {

});

imgUploadForm.addEventListener('submit', () => {
  const isValid = pristine.validate();
});
