import Popup from './Popup.js'
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    openPopup() {
        super.open();
    }

    setSubmitRemove(submitHandler) {
        this._handlerSubmitForm = submitHandler;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerSubmitForm()
            super.close();
        });
    }
}