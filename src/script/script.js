
import '../pages/index.css';
import Card from './Card.js';
import { initialCards } from './initial-сards.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage';
import PopupWithForm from './PopupWithForm';
// import UserInfo from './UserInfo';



const profileForm = document.querySelector('.popup__form_profile');
const elementsForm = document.querySelector('.popup__form_elements');


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

const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (data) => {
        renderItems(data);
    }
});


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