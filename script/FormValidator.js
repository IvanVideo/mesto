const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'error'
};

const popupNode = document.querySelector('.popup');
const formProfile = document.querySelector('.popup__form');

export default class FormValidator {
    constructor(config, formSelector) {
        this._config = config;
        this._formSelector = formSelector;
    }

    //Функция очищения значения input
    resetInput() {
        const inputList = document.querySelectorAll('.popup__input');
        inputList.forEach(item => {
            item.value = ''
        })
    }

    //Функция удаления ошибки
    resetErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(item => {
            item.textContent = ''
        })
        const inputs = document.querySelectorAll('.popup__input');
        inputs.forEach(item => {
            item.classList.remove('popup__input_invalid')
        })
    }

    //Функция вывода ошибки валидации
    showError(from, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }

//Функция скрытия ошибки валидации
hideError(from, input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.remove(config.inputErrorClass);
}

//Функция проверки полей на валидацию
checkInputValidity(from, input, config) {
    if (input.validity.valid) {
        hideError(from, input, config);
    } else {
        showError(from, input, config);
    }
}

//Функция отображения кнопки после валидации
setButtonState(button, isActive) {
    if (isActive) {
        button.classList.remove(this._config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(this._config.inactiveButtonClass);
        button.disabled = true;
    }
}

//Функции проверки форм на валидность
setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config)
            setButtonState(submitButton, form.checkValidity(), config)
        })
    })
}

enableValidation() {
    const form = document.querySelectorAll(this._formSelector);
    setEventListener(form, this._config);

    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, formProfile.checkValidity());
}
}
const FormValidatorAdd = new FormValidator(validationConfig, '.popup__form');
FormValidatorAdd.setButtonState();

enableValidation(validationConfig);