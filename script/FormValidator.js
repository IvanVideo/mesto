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
        this._setEventListener(this._form);


        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setButtonState(this._form.checkValidity())

    }
}









































// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_invalid',
//     inputErrorClass: 'popup__input_invalid',
// });




// // функция показывает ошибку
// function showError(form, input, config) {
//     const error = form.querySelector(`#${input.id}-error`);
//     error.textContent = input.validationMessage;
//     input.classList.add(config.inputErrorClass);
// }
// // функция скрывает ошибку при ее устранении
// function hideError(form, input, config) {
//     const error = form.querySelector(`#${input.id}-error`);
//     error.textContent = '';
//     input.classList.remove(config.inputErrorClass);
// }

// // функция проверки формы на валидность
// function checkInputValidity(form, input, config) {
//     if (input.validity.valid) {
//         hideError(form, input, config);
//     } else {
//         showError(form, input, config);
//     }
// }

// // функция добавления доп.класса кнопке при невалидной форме
// function setButtonState(button, isActive, config) {
//     if (isActive) {
//         button.classList.remove(config.inactiveButtonClass);
//         button.disabled = false;
//     } else {
//         button.classList.add(config.inactiveButtonClass);
//         button.disabled = true;
//     }
// }

// // функция, которой можно передать любую форму для валидации 
// function setEventListener(form, config) {
//     const inputList = form.querySelectorAll(config.inputSelector);
//     const submitButton = form.querySelector(config.submitButtonSelector);

//     inputList.forEach(input => {
//         input.addEventListener('input', (evt) => {
//             checkInputValidity(form, input, config);
//             setButtonState(submitButton, form.checkValidity(), config)
//         })
//     });
// }

// // функция, которая будет находить все формы на странице по конкретному селектору и для каждой из этих форм вызывать setEventListener
// function enableValidation(config) {
//     const forms = document.querySelectorAll(config.formSelector);
//     forms.forEach(form => {
//         setEventListener(form, config)


//         form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//         });

//         const submitButton = form.querySelector(config.submitButtonSelector);
//         setButtonState(submitButton, form.checkValidity(), config)
//     });
// }







// enableValidation(enableValidation);

