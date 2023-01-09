const buttonEdit = document.querySelector('.profile__button-edit');
const buttonEditClose = document.querySelector('.popup__close-edit');
const popupEditForm = document.querySelector('.popup_edit-profile');
const formEdit = popupEditForm.querySelector('.form__edit');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const buttonAddClose = document.querySelector('.popup__close-add');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddButton = document.querySelector('.profile__button-add');
const newCard = document.querySelector('.form__add');
const itemName = newCard.querySelector('.popup__item-name');
const itemPicture = newCard.querySelector('.popup__item-picture');
const popupFullPicture = document.querySelector('.popup_full-picture');
const buttonFullClose = popupFullPicture.querySelector('.popup__close-full');

export { 
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
  buttonFullClose,
  popupFullPicture
};

export const initialCards = [
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
    name: 'Токио',
    link: 'https://images.unsplash.com/photo-1566262258596-7807e694a555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
  }
];