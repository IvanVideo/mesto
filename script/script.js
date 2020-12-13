let popup = document.querySelector('.popup');
let popupNameForm = document.querySelector('.popup__name');
let popupAboutForm = document.querySelector('.popup__about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let popupTitle = document.querySelector('.popup__title');
let popupButtonExist = document.querySelector('.popup__button');
const popupElements = document.querySelector('.popup-elements');
const elementsContentcards = document.querySelector('.elements');

//Открытие popup-формы редактирования информации профиля
let profileButton = document.querySelector('.profile__link').addEventListener('click', handleProfileButtonClik)
function handleProfileButtonClik() {
    popup.classList.add('popup_opened');
    popupNameForm.value = profileName.textContent;
    popupAboutForm.value = profileAbout.textContent;
}

//Открытие popu-формы для добавления нового элемента
const buttonAddElements = document.querySelector('.profile__button').addEventListener('click', openPopupAddElements)
function openPopupAddElements() {
    popupElements.classList.toggle('popup_opened');
}

//Закрытие popup-формы редактирования профиля
let profileButtonClose = document.querySelector('.popup__close').addEventListener('click', handleProfileButtonCloseClik)
function handleProfileButtonCloseClik() {
    popup.classList.remove('popup_opened');
}

//Закрытие popup-формы добавления новых элементов
let buttonClosePopupAddElements = document.querySelector('.popup-elements__close').addEventListener('click', closePopupAddElements)
function closePopupAddElements() {
    popupElements.classList.toggle('popup_opened');
}

//Функция присвоения значений профиля из popup-формы
let popupForm = document.querySelector('.popup__form').addEventListener('submit', formSubmitHandler)
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupNameForm.value;
    profileAbout.textContent = popupAboutForm.value;
    handleProfileButtonCloseClik() 
}


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


const templateElement = document.querySelector('#elements');

function renderElements(item) {
    const newItem = templateElement.content.cloneNode(true);
    const imgElement = newItem.querySelector('.element__imag');
    imgElement.src = item.link;
    const nameElement = newItem.querySelector('.element__title');
    nameElement.alt = item.name;
}
renderElements()