import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        
        return this._formValues;
    }

    setEventListeners() {
        const popupCloseButton = this._popup.querySelector('.popup__close');
        popupCloseButton.addEventListener('click', () => {
            super.close();
        });


        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            super.close();
        });
    }
}