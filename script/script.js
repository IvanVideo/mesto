const popupProfile = document.querySelector('.popup_profile');
const popupProfileNameForm = document.querySelector('.popup__input_profile_name');
const popupProfileAboutForm = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popupElements = document.querySelector('.popup-elements');
const popupImgCloseButton = document.querySelector('.popup-img__close');
const popupImag = document.querySelector('.popup-img');
const popupImagSubtitle = document.querySelector('.popup__subtitle');
const buttonAddElements = document.querySelector('.profile__button');
const profileButton = document.querySelector('.profile__link');
const profileButtonClose = document.querySelector('.popup__close');
const buttonCloseAddElementsForm = document.querySelector('.popup-elements__close');
const popupImg = document.querySelector('.popup__pic');





























const formProfile = document.querySelector('.popup__form_profile');


function showError(from, input) {
    const error = formProfile.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input_invalid');
}


function hideError(from, input) {
    const error = formProfile.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.remove('popup__input_invalid');
}

function checkInputValidity(from, input) {
    if (input.validity.valid) {
        hideError(from, input);
    } else {
        showError(from, input);
    }
}


function setButtonState(button, isActive) {
    if (isActive) {
        button.classList.remove('popup__button_invalid');
        button.disabled = false;
    } else {
        button.classList.add('popup__button_invalid');
        button.disabled = 'disabled';
    }
}






function setEventListener(form) {
    const inputList = form.querySelectorAll('.popup__input');
    const submitButton = form.querySelector('.popup__button');

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input)
            setButtonState(submitButton, formProfile.checkValidity())
        })
    })
}

function enableValidation () {
    const forms = document.querySelectorAll('.popup__form');
    forms.forEach(form => {
        setEventListener(form)

        const submitButton = form.querySelector('.popup__button');
        setButtonState(submitButton, formProfile.checkValidity())
    })
}

enableValidation ()


















//Универсальная функция закрытия popup-элементов
function closeModal(item) {
    item.classList.remove('popup_opened')
}

//Универсальная функция открытия popup-элементов
function openModal(item) {
    item.classList.add('popup_opened')
}

//Callback popup-элемента добавления 
buttonAddElements.addEventListener('click', function () {
    openModal(popupElements);
});

//Callback popup-элемента профиля
profileButton.addEventListener('click', function () {
    popupProfileNameForm.value = profileName.textContent;
    popupProfileAboutForm.value = profileAbout.textContent;
    openModal(popupProfile);
});

//Callback закрытия popup-элемента профиля
profileButtonClose.addEventListener('click', function () {
    closeModal(popupProfile);
});

//Callback закрытия popup-элемента добавления элементов
buttonCloseAddElementsForm.addEventListener('click', function () {
    closeModal(popupElements);
});

//Callback закрытия popup-элемента картинки
popupImgCloseButton.addEventListener('click', function () {
    closeModal(popupImag);
});

// Функция присвоения значений профиля из popup-формы
function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameForm.value;
    profileAbout.textContent = popupProfileAboutForm.value;
    closeModal(popupProfile);
}

const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
popupProfileForm.addEventListener('submit', handleFormProfileSubmit)

const conteinerElements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const inputNamePopupAddElements = document.querySelector('.popup__input_elements_name');
const imgLinkElement = document.querySelector('.popup__input_elements_url');

//Рендер элементов галереи 
function renderElements() {
    const elementsArray = initialCards.map(composeItem);
    conteinerElements.append(...elementsArray);
}

function composeItem({ name, link }) {
    const newElement = templateElement.content.cloneNode(true);

    const imgElement = newElement.querySelector('.element__imag');
    imgElement.src = link;
    imgElement.alt = name;
    //Callback popup картинки
    imgElement.addEventListener('click', function () {
        openModal(popupImag);
        popupImg.src = link;
        popupImg.alt = name;
        popupImagSubtitle.textContent = name;
    });

    const removeButtonElement = newElement.querySelector('.element__trash');
    removeButtonElement.addEventListener('click', removeElement);

    const buttonLike = newElement.querySelector('.element__heart-like');
    buttonLike.addEventListener('click', likeActive);

    const nameElement = newElement.querySelector('.element__title');
    nameElement.textContent = name;

    return newElement;
}

//Функция добавления новой карточки
function addNewElement() {
    const nameCard = inputNamePopupAddElements.value;
    const linkImgCard = imgLinkElement.value;
    const newItem = composeItem({ name: nameCard, link: linkImgCard });
    conteinerElements.prepend(newItem);
    inputNamePopupAddElements.value = ''
    imgLinkElement.value = ''
    closeModal(popupElements);
}

//Функция и колбэк кнопки добавления нового элемента
const popupElementsForm = popupElements.querySelector('.popup__form_elements');
popupElementsForm.addEventListener('submit', addNewElement)

//Функция удаление элемента
function removeElement(event) {
    event.target.closest('.element').remove()
}

//Функция добавления лайков
function likeActive(evt) {
    const picLike = evt.target;
    picLike.classList.toggle('element__heart-like_active')
}

renderElements();
