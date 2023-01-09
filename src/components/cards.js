export { createCard, renderCard, openFull };
import { openPopup } from "./utils";

export const popupFullPicture = document.querySelector('.popup_full-picture');
const imageFull = popupFullPicture.querySelector('.popup__full-image');
const nameFull = popupFullPicture.querySelector('.popup__full-text');
export const cardsContainer = document.querySelector('.elements');

//карточки

function createCard(link, name) {
  const elementTemplate = document.querySelector('#elem').content;
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
    openPopup(popupFullPicture);
    openFull(name, link);
  });

  return cardContainer;
}

//рендер

function renderCard(link, name) {
	cardsContainer.prepend(createCard(link, name))
}

function openFull(name, link) {
  imageFull.src = link;
  imageFull.alt = name;
  nameFull.textContent = name;
}