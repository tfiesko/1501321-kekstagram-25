import { getRandomData } from './data.js';

const usersThumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersData = getRandomData(25);

const usersThumbnailsFragment = document.createDocumentFragment();

usersData.forEach((userData) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = userData.url;
  thumbnail.querySelector('.picture__likes').textContent = userData.likes;
  thumbnail.querySelector('.picture__comments').textContent = userData.comments.length;
  userData.thumbnail = thumbnail;
  usersThumbnailsFragment.appendChild(userData.thumbnail);
});

usersThumbnailsContainer.appendChild(usersThumbnailsFragment);

export {usersData};
