let popup = document.querySelector('.popup');
let popupNameForm = document.querySelector('.popup__name');
let popupAboutForm = document.querySelector('.popup__about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let popupTitle = document.querySelector('.popup__title');
let popupButtonExist = document.querySelector('.popup__button');
const popupElements = document.querySelector('.popup-elements');
const elementsContentcards = document.querySelector('.elements');
const popupImgCloseButton = document.querySelector('.popup-img__close');
const popupImag = document.querySelector('.popup-img');

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


const conteinerElements = document.querySelector('.elements');
const templateElement = document.querySelector('.tamplate');
const inputNamePopupAddElements = document.querySelector('.popup-elements__name');
const imgLinkElement = document.querySelector('.popup-elements__about');

//Рендер элементов галереи 
function renderElements() {
    const elementsArray = initialCards.map(composeItem);
    conteinerElements.append(...elementsArray);
}

function composeItem({name, link}) {
    const newElement = templateElement.content.cloneNode(true);

    const imgElement = newElement.querySelector('.element__imag');
    imgElement.src = link;
     imgElement.addEventListener('click', function() {
        openPopupElementImg(popupImag)
        const popupImg = document.querySelector('.popup__pic');
        popupImg.src = link;
    });

    popupImgCloseButton.addEventListener('click', function(){
        closePopupElementImg(popupImag)
    });

    const removeButtonElement = newElement.querySelector('.element__trash');
    removeButtonElement.addEventListener('click', remuveElement);

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
    const newItem = composeItem({name: nameCard, link: linkImgCard});
    conteinerElements.prepend(newItem);
    inputNamePopupAddElements.value = ''
    imgLinkElement.value = '' 
    closePopupAddElements()
}

//Функция и колбэк кнопки добавления нового элемента
function addElementToTheGallery() {
    const addButton = document.querySelector('.popup-elements__button');
    addButton.addEventListener('click', addNewElement)
}

//Функция удаление элемента
function remuveElement(event) {
    const targetElement = event.target.closest('.element')
    targetElement.remove();
}

//Функция открытия popup-элемента картинки
function openPopupElementImg(modal) {
    modal.classList.add('popup_opened', 'popup_img');
}

//Функция закрытия popup-элемента картинки
function closePopupElementImg(modal) {
    modal.classList.remove('popup_opened');
}

//Функция добавления лайков
function likeActive(evt) {
    const picLike = evt.target;
    picLike.classList.toggle('element__heart-like_active')
}

renderElements();
addElementToTheGallery();