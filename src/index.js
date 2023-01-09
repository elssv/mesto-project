import './pages/index.css';

//переменные

import { cardsContainer } from "./components/cards.js";

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

import { closePopupEscape, openPopup, closePopup } from "./components/utils.js";

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

import { createCard, renderCard, openFull } from "./components/cards.js";
import { popupFullPicture } from "./components/cards.js";

//переменные полного изображения

const buttonFullClose = popupFullPicture.querySelector('.popup__close-full');

//попап полного изображения

buttonFullClose.addEventListener('click', () => {
  closePopup(popupFullPicture);
});

import { initialCards } from "./components/initialCards.js";

//дефолтные 6 карточек

function renderInitialCards() {
  initialCards.forEach((item) => {
    renderCard(item.link, item.name)
  });
}

renderInitialCards();

//валидация форм

import { showInputError, hideInputError, hasInvalidInput, toggleButtonState, setEventListeners, enableValidation } from "./components/validate.js"
    
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
})