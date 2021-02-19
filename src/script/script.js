
import '../pages/index.css';
import Card from './Card.js';
import { initialCards } from './initial-сards.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';


const nameProfile = document.querySelector('.profile__title');
const aboutProfile = document.querySelector('.profile__subtitle');
const userInfo = new UserInfo(nameProfile, aboutProfile);


const buttonEditProfile = document.querySelector('.profile__link');
buttonEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
    const inputName = document.querySelector('.popup__input_profile_name');
    const inputAbout = document.querySelector('.popup__input_profile_about');
    userInfo.getUserInfo(inputName, inputAbout);
});

const buttonAddElements = document.querySelector('.profile__button');
buttonAddElements.addEventListener('click', () => {
    popupAddElements.open();
})


// ////добавление одной карточки
// const newElement = new PopupWithForm({
//     popupSelector: '.popup-elements',
//     handleSubmitForm: () => {
//         newElement.render();
//     }
// })







 const submitForm = new PopupWithForm({ 
    popupSelector: '.popup_profile',
    handleSubmitForm: () => {
        userInfo.setUserInfo();
    }
 })
 submitForm.setEventListeners();


function renderItems(item) {
    const newElement = new Card({
        data: item,
        showPopup
    },
    '.template').render();
    initialCardElement.addItems(newElement);
}

 
const initialCardElement = new Section({
    data: initialCards,
     renderer: renderItems
}, '.elements'
);

function showPopup(name, link) {
    popupImage.open(name, link);
}

const popupImage = new PopupWithImage('.popup-img');




const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleSubmitForm: (data) => {
        renderItems(data);
    }
});

// /////////////////////
// const popupElementsForm = popupElements.querySelector('.popup__form_elements');
// popupElementsForm.addEventListener('submit', addNewElement)
// ////////////////////


const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (data) => {
        renderItems(data);
    }
});

// const formElement = document.querySelector('.popup__form')
// const validForms = new FormValidator(cofig, formElement);

// validForms.enableValidation();
initialCardElement.renderElements();
popupEditProfile.setEventListeners();
popupAddElements.setEventListeners();

// // Функция присвоения значений профиля из popup-формы
// function handleFormProfileSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = popupProfileNameForm.value;
//     profileAbout.textContent = popupProfileAboutForm.value;
//     closeModal(popupProfile);
// }

// //Функция и колбэк кнопки добавления нового элемента
// const popupElementsForm = popupElements.querySelector('.popup__form_elements');
// popupElementsForm.addEventListener('submit', addNewElement)

// //Callback popup-элемента добавления 
// buttonAddElements.addEventListener('click', function () {
//     inputNamePopupAddElements.value = inputNamePopupAddElements.alt;
//     imgLinkElement.value = imgLinkElement.alt;
//     openModal(popupElements);
//     formElements.resetErrors();
//     formElements.resetInputsError();
// });

// Callback popup-элемента профиля
// profileButton.addEventListener('click', function () {
//     popupProfileNameForm.value = profileName.textContent;
//     popupProfileAboutForm.value = profileAbout.textContent;
//     openModal(popupProfile);
//     formProfile.resetErrors();
//     formProfile.resetInputsError();
// });

// //Callback функции присвоения значений профиля из формы профиля
// popupProfileForm.addEventListener('submit', handleFormProfileSubmit)