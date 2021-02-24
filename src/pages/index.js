
import '../pages/index.css';
import Card from '../components/Card.js';
import Api from '../components/Api.js';
import FormValidator from '../components/FormValidator.js';
import { validationConfig } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
// import PopupRemove from '../components/PopupRemove.js';
import {nameProfile} from '../utils/constants.js';
import {aboutProfile} from '../utils/constants.js';
import {buttonAddElements} from '../utils/constants.js';
import {buttonEditProfile} from '../utils/constants.js';
import {formElement} from '../utils/constants.js';
import {formAddEl} from '../utils/constants.js';
import {config} from '../utils/constants.js';
// import {avatar} from '../utils/constants.js';
// import {popupAvatar} from '../utils/constants.js';

const api = new Api(config);

const submitAddFormElement = (data) => {
    api.renderElements(data.name, data.link)

    .catch(err => console.log(err))
}


api.getAllInfo()
.then(([dataUser, cardsData]) => {
    initialCardElement.renderElements(cardsData);
    userInfo.setUserInfo(dataUser);
    userInfo.setUserId(dataUser._id);
    console.log(dataUser)
    console.log(cardsData)
})
.catch(err => console.log(err))


const popupAvatar = new PopupWithForm({
    popupSelector: '.popup-avatar',
})

// avatar.addEventListener('click', () => {
//     popupAvatar.open();
// }) 

// api.changeAvatar()
// .then()









const userInfo = new UserInfo({nameProfile, aboutProfile});
const popupImage = new PopupWithImage('.popup-img');

buttonAddElements.addEventListener('click', () => {

    popupAddElements.open();
})

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
    },
    handleClose:()=>{
        validFormProfile.resetErrors();
        validFormProfile.resetInputsError();
    }
 })

function renderItem(item) {
    const newElement = new Card({
        data: {...item, currentId: userInfo.getMyId()},
        showPopup
    },
    '.template').render();
    initialCardElement.addItems(newElement);
}
 
const initialCardElement = new Section(
     renderItem
, '.elements'
);

function showPopup(name, link) {
    popupImage.open(name, link);
}


const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (initialCardElement) => {
        renderItem(initialCardElement);
    },
    handleClose:()=>{
        formAddElements.resetErrors();
        formAddElements.resetInputsError();
    }
});


const validFormProfile = new FormValidator(validationConfig, formElement);
const formAddElements = new FormValidator(validationConfig, formAddEl);

formAddElements.enableValidation();
validFormProfile.enableValidation();
submitForm.setEventListeners();
popupAddElements.setEventListeners();
popupImage.setEventListeners();