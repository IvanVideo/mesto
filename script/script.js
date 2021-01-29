
import Card from './Card.js';
import { initialCards } from './initial-сards.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from './FormValidator.js';




const profileForm = document.querySelector('.popup__form_profile');
const elementsForm = document.querySelector('.popup__form_elements');

const formProfile = new FormValidator(validationConfig, profileForm);
const formElements = new FormValidator(validationConfig, elementsForm);
formProfile.enableValidation();
formElements.enableValidation();



const cardList = document.querySelector('.elements');


initialCards.forEach((initialCards) => {
    const card = new Card(initialCards, '.elements', showPopup).render();
    cardList.append(card);
});

function showPopup(link, name) {
    popupImg.classList.add('popup_opened');
    document.querySelector('.popup__pic').src = link;
    document.querySelector('.popup__pic').value = name;
    document.querySelector('.popup__subtitle').textContent = name;
}



const popupImg = document.querySelector('.popup-img');
const popupElements = document.querySelector('.popup-elements');
const input = document.querySelectorAll('.popup__input');
const error = document.querySelectorAll('.error');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileNameForm = document.querySelector('.popup__input_profile_name');
const popupProfileAboutForm = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popupImgCloseButton = document.querySelector('.popup-img__close');
const popupImag = document.querySelector('.popup-img');
const popupImagSubtitle = document.querySelector('.popup__subtitle');
const buttonAddElements = document.querySelector('.profile__button');
const profileButton = document.querySelector('.profile__link');
const profileButtonClose = document.querySelector('.popup__close');
const buttonCloseAddElementsForm = document.querySelector('.popup-elements__close');
const conteinerElements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const inputNamePopupAddElements = document.querySelector('.popup__input_elements_name');
const imgLinkElement = document.querySelector('.popup__input_elements_url');
const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
const buttonCreate = document.querySelector('.popup-elements__button');

//Функции закрытия popup-элементов по клику на overlay
function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closeModal(evt.target)
    }
}

// //Функции закрытия popup-элементов по нажатию на клавишу Esc
function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closeModal(activePopup)
    }
}

// Функция присвоения значений профиля из popup-формы
function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameForm.value;
    profileAbout.textContent = popupProfileAboutForm.value;
    closeModal(popupProfile);
}

//Универсальная функция закрытия popup-элементов
function closeModal(item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('click', closePopupByOverlay);
    document.addEventListener('keydown', closePopupByEsc);
}

//Универсальная функция открытия popup-элементов
function openModal(item) {
    item.classList.add('popup_opened');
    document.addEventListener('click', closePopupByOverlay);
    document.addEventListener('keydown', closePopupByEsc);
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
    buttonCreate.classList.add('popup__button_invalid');
    buttonCreate.disabled = true;
    closeModal(popupElements);
}

//Функция и колбэк кнопки добавления нового элемента
const popupElementsForm = popupElements.querySelector('.popup__form_elements');
popupElementsForm.addEventListener('submit', addNewElement)

function resetErrors() {
    error.forEach(item => {
        item.textContent = '';
    });
}

function resetInput() {
    input.forEach(item => {
        item.textContent = item.value;
    });
}

//Callback popup-элемента добавления 
buttonAddElements.addEventListener('click', function () {
    openModal(popupElements);
    resetErrors();
    resetInput();
});

//Callback popup-элемента профиля
profileButton.addEventListener('click', function () {
    popupProfileNameForm.value = profileName.textContent;
    popupProfileAboutForm.value = profileAbout.textContent;
    openModal(popupProfile);
    resetErrors();
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

//Callback функции присвоения значений профиля из формы профиля
popupProfileForm.addEventListener('submit', handleFormProfileSubmit)