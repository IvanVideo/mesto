export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        // document.addEventListener('click', closePopupByOverlay);
        // document.addEventListener('keydown', closePopupByEsc);

    }

    close() {
        console.log('пока2')
        // this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {

    }

    //добавляет слушатель клика на иконку закрытия попапа
    setEventListeners() {
        console.log('привет')
        const popupImgCloseButton = this._popup.querySelector('.popup-img__close')
        popupImgCloseButton.addEventListener('click', () => {
            close(this._popup);
        });
    }
}