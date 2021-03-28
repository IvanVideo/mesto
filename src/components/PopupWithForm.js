import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm, handleClose }) {
        super(popupSelector);
        this._handleClose = handleClose;
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._popupButton = this._popup.querySelector('.popup__button');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        
        return this._formValues;
    }

    openCreate() {
        super.open();
        this._popupButton.textContent = 'Создать';
    }

    openSave() {
        super.open();
        this._popupButton.textContent = 'Сохранить';
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
            this.renderLoading(true)
            this._handleSubmitForm(this._getInputValues());
        });
    }
    
    renderLoading(isLoading) {
    if (isLoading) {
        this._popupButton.textContent = 'Сохранение...';
    } else {
        this._popupButton.textContent = 'Сохранить';
    }
}
}