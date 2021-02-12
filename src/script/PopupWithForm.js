import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.form__input');
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }

    setEventListeners() {
        const editButtonProfile = document.querySelector('.profile__link');
        const elementsAddButton = document.querySelector('.profile__button');
        const popupCloseButton = this._popup.querySelector('.popup__close');

        popupCloseButton.addEventListener('click', () => {
            super.close();
        });

        editButtonProfile.addEventListener('click', () => {
            super.open();
        });

        elementsAddButton.addEventListener('click', () => {
            super.open();
        });

        this._popupForm.addEventListener('submit', () => {
            handleSubmitForm(_getInputValues());
            super.close();
        })
    }
}