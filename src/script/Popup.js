export default class Popup {
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
    }
}