export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.queryselector('.popup__form');
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

    close() {

    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', () => {
            handleSubmitForm(_getInputValues());
        })
    }
}