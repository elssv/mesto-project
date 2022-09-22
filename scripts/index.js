//переменные

const elementTemplate = document.querySelector('#elem').content;
const cardsContainer = document.querySelector('.elements');

//переменные редактирования профиля

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonEditClose = document.querySelector('.popup__close-edit');
const popupEditForm = document.querySelector('.popup_edit-profile');
const formEdit = popupEditForm.querySelector('.form__edit');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//переменные добавления карточки

const buttonAddClose = document.querySelector('.popup__close-add');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddButton = document.querySelector('.profile__button-add');
const newCard = document.querySelector('.form__add');
const itemName = newCard.querySelector('.popup__item-name');
const itemPicture = newCard.querySelector('.popup__item-picture');

//переменные полного изображения

const popupFullPicture = document.querySelector('.popup_full-picture');
const buttonFullClose = popupFullPicture.querySelector('.popup__close-full');
const imageFull = popupFullPicture.querySelector('.popup__full-image');
const nameFull = popupFullPicture.querySelector('.popup__full-text');

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

buttonEditClose.addEventListener('click', function closeFrofile() {
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
  openPopup(popupAddCard);
});

buttonAddClose.addEventListener('click', function closeAddForm(e) {
  closePopup(popupAddCard);
});

//добавление карточки

newCard.addEventListener('submit', function addFormSubmitHandler(e) {
  e.preventDefault();
  renderCard(itemPicture.value, itemName.value);
  newCard.reset();
  closePopup(popupAddCard);
});

//карточки

function createCard(link, name) {
  const cardContainer = elementTemplate.querySelector('.element').cloneNode(true);
  const placePicture =  cardContainer.querySelector('.element__picture');
  const placeName = cardContainer.querySelector('.element__info-text');
  placePicture.src = link;
  placePicture.alt = name;
  placeName.textContent = name;
  const buttonLike = cardContainer.querySelector('.element__info-like');
  const buttonTrash = cardContainer.querySelector('.element__delete');

  //лайк карточки

  buttonLike.addEventListener('click', function likeCard(e) {
    e.target.classList.toggle('element__info-like_active')
  });

  //удаление карточки

  buttonTrash.addEventListener('click', function deleteCard(e) {
    e.target.closest('.element').remove()
  });

  //картинка на полный экран

  placePicture.addEventListener ('click', function openFullPicture(e) {
    openFull (name, link)
  });

  return cardContainer;
}

//дефолтные 6 карточек

function renderInitialCards() {
  initialCards.forEach((item) => {
    renderCard(item.link, item.name)
  });
}

//рендер

function renderCard(link, name) {
	cardsContainer.prepend(createCard(link, name))
}

renderInitialCards();

//попап полного изображения

function openFull(name, link) {
  openPopup(popupFullPicture);
  imageFull.src = link;
  imageFull.alt = name;
  nameFull.textContent = name;
}

buttonFullClose.addEventListener('click', () => {
  closePopup(popupFullPicture);
});