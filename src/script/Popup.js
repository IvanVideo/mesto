export default class Popup {
<<<<<<< HEAD
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {

    }

    close() {

    }

    _handleEscClose() {

    }

    //добавляет слушатель клика на иконку закрытия попапа
    setEventListeners() {

=======
    constructor(templateSelector) {
        this._templateSelector = templateSelector;
    }

    _handleEscClose() {

    }

    open() {

    }

    close() {

    }

    setEventListeners() {
        this._templateSelector.addEventListener('click', function () {
            console.log('sadsaf')
            popupProfileNameForm.value = profileName.textContent;
            popupProfileAboutForm.value = profileAbout.textContent;
            openModal(popupProfile);
            formProfile.resetErrors();
            formProfile.resetInputsError();
        });



        // profileButton.addEventListener('click', function () {
        //     popupProfileNameForm.value = profileName.textContent;
        //     popupProfileAboutForm.value = profileAbout.textContent;
        //     openModal(popupProfile);
        //     formProfile.resetErrors();
        //     formProfile.resetInputsError();
        // });
>>>>>>> 808f10eaafc1d61515b1c9760e317965839d1139
    }
}