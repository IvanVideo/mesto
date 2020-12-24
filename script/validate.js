const popupNode = document.querySelector('.popup');
const formProfile = document.querySelector('.popup__form');

//Функции закрытия popup-элементов по клику на overlay
document.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup')) {
        closeModal(popupProfile)
    }
})

document.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup')) {
        closeModal(popupImag)
    }
})

document.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup')) {
        closeModal(popupElements)
    }
})

//Функции закрытия popup-элементов по нажатию на клавишу Esc
document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
        closeModal(popupProfile)
    }
})

document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
        closeModal(popupImag)
    }
})

document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
        closeModal(popupElements)
    }
})

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
}

//ФУнкция удаления ошибки
function resetInputErrors() {
    const inputs = document.querySelectorAll('.popup__input');
    inputs.forEach(item => {
        item.classList.remove('popup__input_invalid')
    })
}

//Функция вывода ошибки валидации
function showError(from, input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input_invalid');
}

//Функция скрытия ошибки валидации
function hideError(from, input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.remove('popup__input_invalid');
}

//Функция проверки полей на валидацию
function checkInputValidity(from, input) {
    if (input.validity.valid) {
        hideError(from, input);
    } else {
        showError(from, input);
    }
}

//Функция отображения кнопки после валидации
function setButtonState(button, isActive) {
    if (isActive) {
        button.classList.remove('popup__button_invalid');
        button.disabled = false;
    } else {
        button.classList.add('popup__button_invalid');
        button.disabled = 'disabled';
    }
}


//Функции проверки форм на валидность
function setEventListener(form) {
    const inputList = form.querySelectorAll('.popup__input');
    const submitButton = form.querySelector('.popup__button');

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input)
            setButtonState(submitButton, form.checkValidity())
        })
    })
}

function enableValidation () {
    const forms = document.querySelectorAll('.popup__form');
    forms.forEach(form => {
        setEventListener(form);

        const submitButton = form.querySelector('.popup__button');
        setButtonState(submitButton, formProfile.checkValidity())
    })
}

enableValidation ()