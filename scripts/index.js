const buttonEdit = document.querySelector('.profile__button-edit');
const closeButtonEdit = document.querySelector('.popup__close-edit');
const closeButtonAdd = document.querySelector('.popup__close-add')
const popupContainer = document.querySelector('.popup__container');
const popupEditForm = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddButton = document.querySelector('.profile__button-add');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const buttonSaveEdit = document.querySelector('.popup__button-save');
const formEdit = document.querySelector('.form');


//открытие-закрытие попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//попап редактирование профиля

buttonEdit.addEventListener('click', function openProfileForm(e) {
    e.preventDefault();
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    openPopup(popupEditForm);
});

closeButtonEdit.addEventListener('click', function closeFrofile() {
    closePopup(popupEditForm);
});

formEdit.addEventListener('submit', function formSubmitHandler(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEditForm);
});

//попап добавление карточки

popupAddButton.addEventListener('click', function openAddForm(e) {
    e.preventDefault();
    openPopup(popupAddCard);
});

closeButtonAdd.addEventListener('click', function closeAdd(e) {
    e.preventDefault();
    closePopup(popupAddCard);
});

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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector(".card").content;

