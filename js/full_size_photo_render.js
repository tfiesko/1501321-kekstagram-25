import { usersData } from './thumbnails_render.js';
import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const pictureContent = bigPicture.querySelector('.big-picture__img');
const commentsList = bigPicture.querySelector('.social__comments');
const likesCount = bigPicture.querySelector('.likes-count');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');


const onFullSizePictureEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    closeFullSizePicture();
  }
};


const onFullSizePictureClickCloseButton = (evt) => {
  evt.preventDefault();
  closeFullSizePicture();
};

const closeFullSizePicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onFullSizePictureEscKeydown);
  document.body.classList.remove('modal-open');
};

const createCommentItem = (commentData) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  const avatar = document.createElement('img');
  avatar.src = commentData.avatar;
  avatar.classList.add('social__picture');
  avatar.alt = commentData.name;
  avatar.width = '35';
  avatar.height = '35';
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = commentData.message;

  commentItem.append(avatar);
  commentItem.append(commentText);

  return commentItem;
};

const renderComments = (commentsData) => {
  commentsData.forEach((commentData) => {
    commentsList.append(createCommentItem(commentData));
  });
};

usersData.forEach((userData) => {
  userData.thumbnail.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    pictureContent.children[0].src = userData.url;
    likesCount.textContent = userData.likes;
    commentsList.innerHTML = '';
    renderComments(userData.comments);

    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onFullSizePictureEscKeydown);
    bigPictureCloseButton.addEventListener('click', onFullSizePictureClickCloseButton);
  });
});

