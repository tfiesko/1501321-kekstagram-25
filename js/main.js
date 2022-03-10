function getRand(minNumber, maxNumber) {
  return Math.floor(Math.random() * Math.abs((maxNumber - minNumber)) + Math.min(maxNumber, minNumber) );
}


function checkStringLength(checkedString, stringLength) {
  return (checkedString.length <= stringLength);
}


const PHOTOS_DESCRIPTION = [
  'Курорт',
  'Дорога к пляжу',
  'Пляж',
  'Девушка',
  'Ужин',
  'Автомобиль',
  'Почти пустая тарелка',
  'Морс',
  'Люди машут самолёту',
  'Удобная организация хранения',
  'Пляж в Майами',
  'Белый Ауди',
  'Блюдо? Или объедки?',
  'Котосуши',
  'Пара обуви',
  'Облако',
  'Хор',
  'Авто',
  'Зачем?',
  'Прекрасный вид',
  'Еда',
  'Закат',
  '23',
  'Концерт',
  'Заповедник',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Дмитрий',
  'Алексей',
  'Олеся',
  'Анна',
  'Мария',
  'Виктор',
  'Кирилл',
  'Ольга',
  'Кристина',
  'Павел',
]

function createPhotoObject(id, photoAdressId, description, likes, comments) {
  return {
    id: id,
    url: 'photos/' + photoAdressId + '.jpg',
    description: description,
    likes: likes,
    comments: comments,
  };

}

const createComment = (id, idOfCommentsArray) => {
  return {
    id: +(idOfCommentsArray.toString() + id.toString()),
    avatar: 'img/avatar-' + getRand(1, 6) + '.svg',
    message: COMMENTS[getRand(0, COMMENTS.length - 1)] + COMMENTS[getRand(0, COMMENTS.length - 1)],
    name: NAMES[getRand(0, NAMES.length - 1)],
  };
};

function getArrayOfComments(lengthOfArray, idOfCommentsArray) {
  const array = [];
  for(let i = 0; i < lengthOfArray; i++) {

    array[i] = createComment(i, idOfCommentsArray);
  }
  return array;
}

function getArrayOfObjects(lengthOfArray) {
  const array = [];
  for(let i = 0; i < lengthOfArray; i++){

    array[i] = createPhotoObject(i, (i + 1), PHOTOS_DESCRIPTION[i], getRand(15, 200), getArrayOfComments(getRand(1, 5), i));
  }
  return array;
}

console.log(getArrayOfObjects(25));
