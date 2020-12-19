const popupProfile = document.querySelector('.popup_profile');
const popupProfileNameForm = document.querySelector('.popup__input_profile_name');
const popupProfileAboutForm = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popupButtonExist = document.querySelector('.popup__button');
const popupElements = document.querySelector('.popup-elements');
const elementsContentCards = document.querySelector('.elements');
const popupImgCloseButton = document.querySelector('.popup-img__close');
const popupImag = document.querySelector('.popup-img');
const addButton = document.querySelector('.popup-elements__button');
const popupImagSubtitle = document.querySelector('.popup__subtitle');
const popup = document.querySelector('.popup');
const buttonAddElements = document.querySelector('.profile__button');
const profileButton = document.querySelector('.profile__link');
const profileButtonClose = document.querySelector('.popup__close');
const popupForms = document.querySelectorAll('.popup');
const buttonCloseAddElementsForm = document.querySelector('.popup-elements__close');

//Callback popup-элемента добавления 
buttonAddElements.addEventListener('click', function() {
    openModal(popupElements);
});

//Callback popup-элемента профиля
profileButton.addEventListener('click', function() {
    popupProfileNameForm.value = profileName.textContent;
    popupProfileAboutForm.value = profileAbout.textContent;
    openModal(popupProfile);
});

//Универсальная функция открытия popup-элементов
function openModal(item){
    item.classList.add('popup_opened')
}

//Callback закрытия popup-элемента профиля
profileButtonClose.addEventListener('click', function() {
    closeModal(popupProfile);
});

//Callback закрытия popup-элемента добавления элементов
buttonCloseAddElementsForm.addEventListener('click', function() {
    closeModal(popupElements);
});

//Callback закрытия popup-элемента картинки
popupImgCloseButton.addEventListener('click', function () {
    closeModal(popupImag);
});

//Универсальная функция закрытия popup-элементов
function closeModal(item){
    item.classList.remove('popup_opened')
}

// Функция присвоения значений профиля из popup-формы
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupProfileNameForm.value;
    profileAbout.textContent = popupProfileAboutForm.value;
    popupProfile.classList.remove('popup_opened')
}

const popupProfileForm = popupProfile.querySelector('.popup__form_profile');
popupProfileForm.addEventListener('submit', formSubmitHandler)

const conteinerElements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const inputNamePopupAddElements = document.querySelector('.popup__input_elements_name');
const imgLinkElement = document.querySelector('.popup__input_elements_url');

//Рендер элементов галереи 
function renderElements() {
    const elementsArray = initialCards.map(composeItem);
    conteinerElements.append(...elementsArray);
}

function composeItem({ name, link }) {
    const newElement = templateElement.content.cloneNode(true);

    const imgElement = newElement.querySelector('.element__imag');
    imgElement.src = link;
    imgElement.alt = name;
    //Callback popup картинки
    imgElement.addEventListener('click', function () { 
        openModal(popupImag);
        const popupImg = document.querySelector('.popup__pic');
        popupImg.src = link;
        popupImg.alt = name;
        popupImagSubtitle.textContent = name;
    });

    const removeButtonElement = newElement.querySelector('.element__trash');
    removeButtonElement.addEventListener('click', removeElement);

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
    const newItem = composeItem({ name: nameCard, link: linkImgCard });
    conteinerElements.prepend(newItem);
    inputNamePopupAddElements.value = ''
    imgLinkElement.value = ''
    popupElements.classList.remove('popup_opened')
}

//Функция и колбэк кнопки добавления нового элемента
const popupElementsForm = popupElements.querySelector('.popup__form_elements');
popupElementsForm.addEventListener('submit', addNewElement)

//Функция удаление элемента
function removeElement(event) {
    event.target.closest('.element').remove()
}

// //Функция закрытия popup-элемента картинки
// function closePopupElementImg(modal) {
//     modal.classList.remove('popup_opened');
// }

//Функция добавления лайков
function likeActive(evt) {
    const picLike = evt.target;
    picLike.classList.toggle('element__heart-like_active')
}

renderElements();