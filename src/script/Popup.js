export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        document.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        });
        this.setEventListeners();
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    } 

    //добавляет слушатель клика на иконку закрытия попапа
    setEventListeners() {
        const popupImgCloseButton = this._popup.querySelector('.popup-img__close')
        popupImgCloseButton.addEventListener('click', () => {
            this.close();
        });
    }
}