import './pages/index.css';

import { cardsContainer } from "./components/cards.js";
import { closePopupEscape, openPopup, closePopup } from "./components/modal.js";
import { createCard, renderCard, openFull } from "./components/cards.js";
import { popupFullPicture } from "./components/constants.js";
import { initialCards } from "./components/constants.js";
import { showInputError, hideInputError, hasInvalidInput, toggleButtonState, setEventListeners, enableValidation } from "./components/validate.js"
import { 
  buttonEdit, 
  buttonEditClose, 
  popupEditForm, 
  formEdit, 
  nameInput, 
  jobInput, 
  profileName, 
  profileAbout, 
  buttonAddClose, 
  popupAddCard, 
  popupAddButton,
  newCard,
  itemName,
  itemPicture,
  buttonFullClose
} from "./components/constants.js";

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

function addFormSubmitHandler(e) {
  e.preventDefault();
  renderCard(itemPicture.value, itemName.value);
  newCard.reset();
  closePopup(popupAddCard);
}

newCard.addEventListener('submit', addFormSubmitHandler);

//попап полного изображения

buttonFullClose.addEventListener('click', () => {
  closePopup(popupFullPicture);
});

//дефолтные 6 карточек

function renderInitialCards() {
  initialCards.forEach((item) => {
    renderCard(item.link, item.name)
  });
}

renderInitialCards();

//валидация форм

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
})