//закрытие попапа через escape

const closePopupEscape = (e) => {
  if (e.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
};

//открытие-закрытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

//закрытие попапа по клику на оверлей

const overlayPopupCloseOverlay = Array.from(document.querySelectorAll('.popup'));

overlayPopupCloseOverlay.forEach((overlay) => {
    overlay.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('popup_opened')) {
            closePopup(e.target);
        }
    });
});


export { closePopupEscape, openPopup, closePopup };