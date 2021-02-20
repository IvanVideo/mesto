export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        });
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        });

        const span = this._popup.querySelectorAll('.error');
        span.forEach((item) => {
            item.textContent = ''
        })

        const input = this._popup.querySelectorAll('.popup__input')
        input.forEach((item) => {
            item.classList.remove('popup__input_invalid')
        })
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