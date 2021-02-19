import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
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


        const popupProfileSubmitForm = this._popup.querySelector('.popup__form');
        popupProfileSubmitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            super.close();
        });

        const addElementsButtonSubmit = this._popup.querySelector('.popup__form');
        addElementsButtonSubmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            super.close();
        })
    }
}