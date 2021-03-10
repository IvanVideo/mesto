
import '../pages/index.css';
import Card from '../components/Card.js';
import Api from '../components/Api.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import { validationConfig } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { nameProfile } from '../utils/constants.js';
import { avatarProfile } from '../utils/constants.js';
import { aboutProfile } from '../utils/constants.js';
import { buttonAddElements } from '../utils/constants.js';
import { buttonEditProfile } from '../utils/constants.js';
import { formElement } from '../utils/constants.js';
import { formAddEl } from '../utils/constants.js';
import { config } from '../utils/constants.js';
import Popup from '../components/Popup';
// import { Template } from 'webpack';
// import {avatar} from '../utils/constants.js';

const api = new Api(config);

///Рендинг//// Приходит с сервака инфа и рендерит элементы
api.getAllInfo()
    .then(([dataUser, cardsData]) => {
        userInfo.setUserInfo(dataUser);
        userInfo.setUserAvatar(dataUser.avatar);
        userInfo.setUserId(dataUser._id);
        initialCardElement.renderElements(cardsData);
        console.log(dataUser);
        console.log(cardsData);
    })
    .catch(err => console.log(err))


//Профиль///// Открываем попап аватарки
const avatarEditButton = document.querySelector('.profile__opacity-image');
avatarEditButton.addEventListener('click', () => {
    newProfileInfo.open();
})

///// Сабмит авы
const newProfileInfo = new PopupWithForm({
    popupSelector: '.popup-avatar',
    handleFormSubmit: () => {
        api.setNewAvatarInfo()
            .then((res) => {
                userInfo.setUserInfo(res)
            })
    },
    handleClose: () => {
        validFormProfile.resetErrors();
        validFormProfile.resetInputsError();
    }

})
newProfileInfo.setEventListeners()


//Удаление карточки/// Функция открытия попапа подтверждения
function shwoPopupSubmit(data, element) {
    deletItem.openPopup()
    deletItem.setSubmitRemove(() => {
        api.deleteItem(data._id)
            .then(() => {
                element.remove();
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

function createCard(item) {
    return new Card({
        data: { ...item, currentId: userInfo.getMyId() },
        showPopup,
        shwoPopupSubmit
    },
        '.template').render();
}

///// Инициализируем класс попапа подтверждения
const deletItem = new PopupWithSubmit('.popup-remove')
deletItem.setEventListeners();


//Добавление карточки/// 
const popupAddElements = new PopupWithForm({
    popupSelector: '.popup-elements',
    handleSubmitForm: (inputData) => {
        api.addNewItem(inputData)
            .then((data) => {
                const newElement = createCard(data);
                initialCardElement.addItems(newElement, true);
            })
    }
});




const userInfo = new UserInfo({ nameProfile, aboutProfile, avatarProfile });
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
    handleClose: () => {
        validFormProfile.resetErrors();
        validFormProfile.resetInputsError();
    }
})

function renderItem(item) {
    const newElement = createCard(item);
    initialCardElement.addItems(newElement);
}

const initialCardElement = new Section(
    renderItem
    , '.elements'
);

function showPopup(name, link) {
    popupImage.open(name, link);
}


// const popupAddElements = new PopupWithForm({
//     popupSelector: '.popup-elements',
//     handleSubmitForm: (initialCardElement) => {
//         renderItem(initialCardElement);
//     },
//     handleClose:()=>{
//         formAddElements.resetErrors();
//         formAddElements.resetInputsError();
//     }
// });


const validFormProfile = new FormValidator(validationConfig, formElement);
const formAddElements = new FormValidator(validationConfig, formAddEl);

formAddElements.enableValidation();
validFormProfile.enableValidation();
submitForm.setEventListeners();
popupAddElements.setEventListeners();
popupImage.setEventListeners();