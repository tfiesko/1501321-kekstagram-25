import { getArrayOfObjects } from './data.js';

const usersThumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersData = getArrayOfObjects(25);

const usersThumbnailsFragment = document.createDocumentFragment();

usersData.forEach((userData) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = userData.url;
  thumbnail.querySelector('.picture__likes').textContent = userData.likes;
  thumbnail.querySelector('.picture__comments').textContent = userData.comments.length;
  usersThumbnailsFragment.appendChild(thumbnail);
});

usersThumbnailsContainer.appendChild(usersThumbnailsFragment);
