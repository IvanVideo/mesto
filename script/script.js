let popup = document.querySelector('.popup');
let popupelements = document.querySelector('.popupelements');
let popupNameForm = document.querySelector('.popup__name');
let popupAboutForm = document.querySelector('.popup__about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let popupTitle = document.querySelector('.popup__title');
let popupButtonExist = document.querySelector('.popup__button');
// let elementCard = document.querySelector('.element');


// let elementButtonRemove = document.querySelector('.element__pic').addEventListener('click', elementRemove)
// function elementRemove() {
//     elementCard.remove();
// }

let popupForm = document.querySelector('.popup__form').addEventListener('submit', formSubmitHandler)
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupNameForm.value;
    profileAbout.textContent = popupAboutForm.value;
    handleProfileButtonCloseClik() 
}
let popupFormElementAdd = document.querySelector('.popupelements').addEventListener('submit', addElementsToGallery)
function addElementsToGallery (evt) {
    let nameForm = document.querySelector('.popupelements__name');
    let linkForm = document.querySelector('.popupelements__about');
    contentElements.append(nameForm.value, linkForm.value)
}

let profileButton = document.querySelector('.profile__link').addEventListener('click', handleProfileButtonClik)
function handleProfileButtonClik() {
    popup.classList.add('popup_opened');
    popupNameForm.value = profileName.textContent;
    popupAboutForm.value = profileAbout.textContent;
}

let profileButtonClose = document.querySelector('.popup__close').addEventListener('click', handleProfileButtonCloseClik)
function handleProfileButtonCloseClik() {
    popup.classList.remove('popup_opened');
}

let buttonAddElements = document.querySelector('.profile__button').addEventListener('click', handleOnButtonAddElements)
function handleOnButtonAddElements() {
    popupelements.classList.add('popupelements_opened');
}

let buttonAddElementsClose = document.querySelector('.popupelements__close').addEventListener('click', handleOnButtonAddElementsClose)
function handleOnButtonAddElementsClose() {
    popupelements.classList.remove('popupelements_opened');
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

const contentElements = document.querySelector('.elements');

function renderElements () {
    let newHTML = '';
    newHTML = initialCards.map(item => {
        return `<div class="element">
        <button class="element__button"><img src="${item.link}" alt="Измерение 35" class="element__imag"></button>
        <button class="element__trash" type="button"><img src="./images/Trash.svg" alt="" class="element__pic"></button>
        <div class="element__content">
            <h2 class="element__title">${item.name}</h2>
            <button class="element__heart-like" type="button"><img src="./images/Vector_heart_2.png"
                    alt="Кнопка лайка" class="element__heart"></button>
        </div>
    </div>`
    }).join('');

    contentElements.insertAdjacentHTML('afterbegin', newHTML);
}
renderElements ()