
import '../pages/index.css';
import Card from '../components/Card.js';
import { initialCards } from '../utils/initial-сards.js';
import FormValidator from '../components/FormValidator.js';
import { validationConfig } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import nameProfile from '../utils/constants.js'

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
    submitForm.open();
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


function renderItem(item) {
    const newElement = new Card({
        data: item,
        showPopup
    },
    '.template').render();
    initialCardElement.addItems(newElement);
}
 
const initialCardElement = new Section({
    data: initialCards,
     renderer: renderItem
}, '.elements'
);

function showPopup(name, link) {
    popupImage.open(name, link);
}


const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (initialCardElement) => {
        renderItem(initialCardElement);
    }
});

const formElement = document.querySelector('.popup__form_profile');
const formAddEl = document.querySelector('.popup__form_elements');
const validFormProfile = new FormValidator(validationConfig, formElement);
const formAddElements = new FormValidator(validationConfig, formAddEl);

formAddElements.enableValidation();
validFormProfile.enableValidation();
initialCardElement.renderElements();
submitForm.setEventListeners();
popupAddElements.setEventListeners();
submitForm.setEventListeners();