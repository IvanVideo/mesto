
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
const buttonAddElements = document.querySelector('.profile__button');

const userInfo = new UserInfo({nameProfile, aboutProfile});
const popupImage = new PopupWithImage('.popup-img');

buttonAddElements.addEventListener('click', () => {
    popupAddElements.open();
})

const buttonEditProfile = document.querySelector('.profile__link');
buttonEditProfile.addEventListener('click', () => {
    const inputName = document.querySelector('.popup__input_profile_name');
    const inputAbout = document.querySelector('.popup__input_profile_about');
    popupEditProfile.open();
    const infoUser = userInfo.getUserInfo(); 
    inputName.value = infoUser.name; 
    inputAbout.value = infoUser.about; 
});

const submitForm = new PopupWithForm({ 
    popupSelector: '.popup_profile',
    handleSubmitForm: (data) => {
        userInfo.setUserInfo(data);
    }
 })


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

const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleSubmitForm: (data) => {
        renderItems(data);
    }
});




const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (initialCardElement) => {
        renderItems(initialCardElement);
    }
});







const formElement = document.querySelector('.popup__form_profile');
const formAddEl = document.querySelector('.popup__form_elements');
const validFormProfile = new FormValidator(validationConfig, formElement);
const formAddElements = new FormValidator(validationConfig, formAddEl);

formAddElements.enableValidation();
validFormProfile.enableValidation();
initialCardElement.renderElements();
popupEditProfile.setEventListeners();
submitForm.setEventListeners();