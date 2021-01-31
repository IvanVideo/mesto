
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
    const card = new Card(initialCards, '.template', showPopup).render();
    cardList.append(card);
});

const popupPic = document.querySelector('.popup__pic');
const popupImg = document.querySelector('.popup-img');
const popupElements = document.querySelector('.popup-elements');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileNameForm = document.querySelector('.popup__input_profile_name');
const popupProfileAboutForm = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popupImgCloseButton = document.querySelector('.popup-img__close');
const popupImag = document.querySelector('.popup-img');
const buttonAddElements = document.querySelector('.profile__button');
const profileButton = document.querySelector('.profile__link');
const profileButtonClose = document.querySelector('.popup__close');
const buttonCloseAddElementsForm = document.querySelector('.popup-elements__close');
const conteinerElements = document.querySelector('.elements');
const inputNamePopupAddElements = document.querySelector('.popup__input_elements_name');
const imgLinkElement = document.querySelector('.popup__input_elements_url');
const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
const buttonCreate = document.querySelector('.popup-elements__button');

function showPopup(link, name) {
    openModal(popupImg);
    popupPic.src = link;
    popupPic.value = name;
    document.querySelector('.popup__subtitle').textContent = name;

}

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

//Функция добавления новой карточки
function addNewElement() {
    const nameCard = inputNamePopupAddElements.value;
    const linkImgCard = imgLinkElement.value;
    const carData = ({ name: nameCard, link: linkImgCard });
    const newCard = new Card(carData, '.template', showPopup).render();
    conteinerElements.prepend(newCard);
    inputNamePopupAddElements.value = ''
    imgLinkElement.value = ''
    buttonCreate.classList.add('popup__button_invalid');
    buttonCreate.disabled = true;
    closeModal(popupElements);
}

//Функция и колбэк кнопки добавления нового элемента
const popupElementsForm = popupElements.querySelector('.popup__form_elements');
popupElementsForm.addEventListener('submit', addNewElement)

//Callback popup-элемента добавления 
buttonAddElements.addEventListener('click', function () {
    inputNamePopupAddElements.value = inputNamePopupAddElements.alt;
    imgLinkElement.value = imgLinkElement.alt;
    openModal(popupElements);
    formElements.resetErrors();
    formElements.resetInputsError();
});

//Callback popup-элемента профиля
profileButton.addEventListener('click', function () {
    popupProfileNameForm.value = profileName.textContent;
    popupProfileAboutForm.value = profileAbout.textContent;
    openModal(popupProfile);
    formProfile.resetErrors();
    formProfile.resetInputsError();
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