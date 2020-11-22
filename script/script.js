let profileButton = document.querySelector('.profile__link');
let popup = document.querySelector('.popup');
let profileButtonClose = document.querySelector('.popup__close');
let popupClose = document.querySelector('.popup');
let popupNameForm = document.querySelector('.popup__name');
let popupAboutForm = document.querySelector('.popup__about');
let popupButtonSave = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

profileButton.addEventListener('click', handleProfileButtonClik)
profileButtonClose.addEventListener('click', handleProfileButtonCloseClik)
popupButtonSave.addEventListener('click', formSubmitHandler)


function handleProfileButtonClik() {
    popup.classList.add('popup_opened');
    popupNameForm.value = profileName.textContent;
    popupAboutForm.value = profileAbout.textContent;
}

function handleProfileButtonCloseClik() {
    popupClose.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    popup.classList.remove('popup_opened');
    profileName.textContent = popupNameForm.value;
    profileAbout.textContent = popupAboutForm.value;
}
