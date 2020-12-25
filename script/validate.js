const popupNode = document.querySelector('.popup');
const formProfile = document.querySelector('.popup__form');

//Функция очищения значения input
function resetInput() {
    const inputList = document.querySelectorAll('.popup__input');
    inputList.forEach(item => {
        item.value = ''
    })
}

//Функция удаления ошибки
function resetErrors() {
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
function showError(from, input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

//Функция скрытия ошибки валидации
function hideError(from, input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.remove(config.inputErrorClass);
}

//Функция проверки полей на валидацию
function checkInputValidity(from, input, config) {
    if (input.validity.valid) {
        hideError(from, input, config);
    } else {
        showError(from, input, config);
    }
}

//Функция отображения кнопки после валидации
function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}

//Функции проверки форм на валидность
function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config)
            setButtonState(submitButton, form.checkValidity(), config)
        })
    })
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config);

        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState(submitButton, formProfile.checkValidity(), config)
    })
}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'error'
};
enableValidation(validationConfig)

