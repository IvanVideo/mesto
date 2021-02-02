export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
};

export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._form = formElement;
        this._button = formElement.querySelector(config.submitButtonSelector);
        this._input = formElement.querySelectorAll(config.inputSelector);
        this._error = formElement.querySelectorAll('.error');
    }
    // функция показывает ошибку
    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }
    // функция скрывает ошибку при ее устранении
    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputErrorClass);
    }

    // функция проверки формы на валидность
    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }

    // функция добавления доп.класса кнопке при невалидной форме
    _setButtonState(isActive) {
        if (isActive) {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = true;
        }
    }

    // функция, которой можно передать любую форму для валидации 
    _setEventListener() {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);

        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input);
                this._setButtonState(this._form.checkValidity())
            })
        });
    }

    // функция, которая будет находить все формы на странице по конкретному селектору и для каждой из этих форм вызывать setEventListener
    enableValidation() {
        this._setEventListener();


        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setButtonState(this._form.checkValidity())

    }
    // функция сброса ошшибки инпута
    resetInputsError() {
        this._input.forEach(item => {
            item. classList.remove('popup__input_invalid')
        });
    }

    // функция сброса ошибок
    resetErrors() {
        this._error.forEach(item => {
            item.textContent = '';
        });
    }
}

