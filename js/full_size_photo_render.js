import { getArrayOfObjects } from './data.js';

const usersData = getArrayOfObjects(25);

const bigPicture = document.querySelector('.big-picture');

bigPicture.classList.remove('hidden');

usersData.forEach((userData) => {

});

