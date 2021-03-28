
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
import { newNameProfile } from '../utils/constants.js';
import { newAboutProfile } from '../utils/constants.js';
import { aboutProfile } from '../utils/constants.js';
import { buttonAddElements } from '../utils/constants.js';
import { buttonEditProfile } from '../utils/constants.js';
import { formElement } from '../utils/constants.js';
import { formAddEl } from '../utils/constants.js';
import { config } from '../utils/constants.js';

const api = new Api(config);

///Рендинг//// Приходит с сервака инфа и рендерит элементы
api.getAllInfo()
    .then(([dataUser, cardsData]) => {
        userInfo.setUserInfo(dataUser);
        userInfo.setUserAvatar(dataUser.avatar);
        userInfo.setUserId(dataUser._id);
        initialCardElement.renderElements(cardsData);
    })
    .catch((err) => {
        console.log(err)
    })


//Профиль///// Открываем попап аватарки
const avatarEditButton = document.querySelector('.profile__opacity-image');
avatarEditButton.addEventListener('click', () => {
    newProfileInfo.openSave();
})


///// Сабмит авы
const newProfileInfo = new PopupWithForm({
    popupSelector: '.popup-avatar',
    handleSubmitForm: (data) => {
        api.editAvatar(data.link)
            .then((res) => {
                userInfo.setUserAvatar(res);
                newProfileInfo.close()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                newProfileInfo.renderLoading(false)
            })
    },
    handleClose: () => {
        validFormProfile.resetErrors();
        validFormProfile.resetInputsError();
    }

})



newProfileInfo.setEventListeners()


//Удаление карточки/// Функция открытия попапа подтверждения
function shwoPopupSubmit(data, element, remove) {
    deletItem.openPopup()
    deletItem.setSubmitRemove(() => {
        api.deleteItem(data._id)
            .then(() => {
                deletItem.close();
                remove(element)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                newProfileInfo.renderLoading(false)
            })
    })
}

function createCard(item) {
    return new Card({
        data: { ...item, currentId: userInfo.getMyId() },
        showPopup,
        shwoPopupSubmit,
        handleLikeClick: (card, status, refresh, element, activeLikeStatus) => {
            if (status === true) {
                api.removeLike(card._id)
                    .then((data) => {
                        refresh(data, element); 
                        activeLikeStatus(status, element)   
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                api.setLike(card._id)
                    .then((data) => {
                        refresh(data, element);
                        activeLikeStatus(status, element)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
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
                popupAddElements.close();
            })
            .catch((err) => {
                console.log(err)
            })
    }
});


const userInfo = new UserInfo({ nameProfile, aboutProfile, avatarProfile });
const popupImage = new PopupWithImage('.popup-img');

buttonAddElements.addEventListener('click', () => {
    popupAddElements.openCreate();
})


// Редактирование профиля
buttonEditProfile.addEventListener('click', () => {
    const inputName = document.querySelector('.popup__input_profile_name');
    const inputAbout = document.querySelector('.popup__input_profile_about');
    submitForm.openSave();
    const infoUser = userInfo.getUserInfo();
    inputName.value = infoUser.name;
    inputAbout.value = infoUser.about;
});

const submitForm = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleSubmitForm: (infoUser) => {
        api.editProfileInfo(infoUser)
            .then((data) => {
                newNameProfile.textContent = data.name;
                newAboutProfile.textContent = data.about;
                submitForm.close();
            })
            .finally(() => {
                newProfileInfo.renderLoading(false)
            })
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
    renderItem,
    '.elements'
);

function showPopup(name, link) {
    popupImage.open(name, link);
}

const validFormProfile = new FormValidator(validationConfig, formElement);
const formAddElements = new FormValidator(validationConfig, formAddEl);

formAddElements.enableValidation();
validFormProfile.enableValidation();
submitForm.setEventListeners();
popupAddElements.setEventListeners();
popupImage.setEventListeners();