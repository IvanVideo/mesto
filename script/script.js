let profileButton = document.querySelector('.profile__link');
let popup = document.querySelector('.popup');
let profileButtonClose = document.querySelector('.popup__close');
let popupNameForm = document.querySelector('.popup__name');
let popupAboutForm = document.querySelector('.popup__about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');

profileButton.addEventListener('click', handleProfileButtonClik)
profileButtonClose.addEventListener('click', handleProfileButtonCloseClik)
popupForm.addEventListener('submit', formSubmitHandler)

function handleProfileButtonClik() {
    popup.classList.add('popup_opened');
    popupNameForm.value = profileName.textContent;
    popupAboutForm.value = profileAbout.textContent;
}

function handleProfileButtonCloseClik() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupNameForm.value;
    profileAbout.textContent = popupAboutForm.value;
    handleProfileButtonCloseClik() 
}