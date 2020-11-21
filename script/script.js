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
popupButtonSave.addEventListener('submit', formSubmitHandler)


function handleProfileButtonClik() {
    popup.classList.add('popup_popup_opened');
    popupNameForm.value = document.querySelector('.profile__title').textContent;
    popupAboutForm.value = document.querySelector('.profile__subtitle').textContent;
}

function handleProfileButtonCloseClik() {
    popupClose.classList.remove('popup_popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    popup.classList.remove('popup_popup_opened');
    profileName.textContent = document.querySelector('.popup__name').value;
    profileAbout.textContent = document.querySelector('.popup__about').value;
}
