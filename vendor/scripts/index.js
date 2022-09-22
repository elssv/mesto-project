//картинки

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://i.ibb.co/rxWvkWv/photo-1559426756-14c161f0dae8-1.png'
  }
];
//переменные

const elements = document.querySelector('.elements');

//переменные редактирования профиля

const buttonEdit = document.querySelector('.profile__button-edit');
const closeButtonEdit = document.querySelector('.popup__close-edit');
const popupEditForm = document.querySelector('.popup_edit-profile');
const formEdit = popupEditForm.querySelector('.form__edit');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//переменные добавления карточки

const closeButtonAdd = document.querySelector('.popup__close-add');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddButton = document.querySelector('.profile__button-add');
const newCard = document.querySelector('.form__add');
const itemName = newCard.querySelector('.popup__item-name');
const itemPicture = newCard.querySelector('.popup__item-picture');

//переменные полного изображения

const popupFullPicture = document.querySelector('.popup_full-picture');
const popupFullCloseButton = popupFullPicture.querySelector('.popup__close-full');

//открытие-закрытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие-закрытие попапа редактирование профиля

buttonEdit.addEventListener('click', function openProfileForm(e) {
  e.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupEditForm);
});

closeButtonEdit.addEventListener('click', function closeFrofile() {
  closePopup(popupEditForm);
});

//редактирование

formEdit.addEventListener('submit', function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEditForm);
});

//открытие-закрытие попапа добавление карточки

popupAddButton.addEventListener('click', function openAddForm(e) {
  e.preventDefault();
  openPopup(popupAddCard);
});

closeButtonAdd.addEventListener('click', function closeAdd(e) {
  e.preventDefault();
  closePopup(popupAddCard);
});

//добавление карточки

newCard.addEventListener('submit', function addformSubmitHandler(e) {
  e.preventDefault();
  renderCard(itemPicture.value, itemName.value);
  itemName.value = "";
  itemPicture.value = "";
  closePopup(popupAddCard);
});

//карточки

function createCard(link, name) {
  const elementTemplate = document.querySelector('#elem').content;
  const cards = elementTemplate.querySelector('.element').cloneNode(true);
  const placePicture =  cards.querySelector('.element__picture');
  placePicture.src = link;
  placePicture.alt = name;
  cards.querySelector('.element__info-text').textContent = name;
  const like = cards.querySelector('.element__info-like');
  const deleteButton = cards.querySelector('.element__delete');

  //лайк карточки

  like.addEventListener('click', function likeCard(e) {
    e.target.classList.toggle('element__info-like_active')
  });

  //удаление карточки

  deleteButton.addEventListener('click', function deleteCard(e) {
    e.target.closest('.element').remove()
  });

  //картинка на полный экран

  placePicture.addEventListener ('click', function fullPicture(e) {
    openFull (name, link)
  });

  return cards;
}

//дефолтные 6 карточек

function renderInitialCards() {
  initialCards.forEach((item) => {
    renderCard(item.link, item.name)
  });
}

//рендер

function renderCard(link, name) {
	elements.prepend(createCard(link, name))
}

renderInitialCards();

//попап полного изображения

function openFull(name, link) {
  openPopup(popupFullPicture);
  popupFullPicture.querySelector('.popup__full-image').src = link;
  popupFullPicture.querySelector('.popup__full-text').textContent = name;
}

popupFullCloseButton.addEventListener('click', () => {
  closePopup(popupFullPicture);
});