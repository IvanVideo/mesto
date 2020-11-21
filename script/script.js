const profileButton = document.querySelector('.profile__link');
const popup = document.querySelector('.popup');
const profileButtonClose = document.querySelector('.popup__close');
const popupClose = document.querySelector('.popup');
const popupNameForm = document.querySelector('.pupup__name');
const popupAboutForm = document.querySelector('.pupup__about');
const popupButtonSave = document.querySelector('.popup__button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');

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
    profileName.textContent = document.querySelector('.pupup__name').value;
    profileAbout.textContent = document.querySelector('.pupup__about').value;
}
