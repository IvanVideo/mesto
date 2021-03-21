import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm, handleClose }) {
        super(popupSelector);
        this._handleClose = handleClose;
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

    close(){
        if(typeof this._handleClose === 'function'){
            this._handleClose();
        }
        this._popupForm.reset();
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log(this._handleSubmitForm, 'что-то про аву')
            this._handleSubmitForm(this._getInputValues());
            super.close();
        });


    }
}