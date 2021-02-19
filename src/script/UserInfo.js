export default class UserInfo {
    constructor(nameProfile, aboutProfile) {
        this._nameProfile = nameProfile;
        this._aboutProfile = aboutProfile;
        const popupForm = document.querySelector('.popup_profile');
        this._name = popupForm.querySelector('.popup__input_profile_name');
        this._about = popupForm.querySelector('.popup__input_profile_about');
    }

    setUserInfo (name, about) {
        console.log('ку-ку')
        const nameProfile = document.querySelector('.profile__title');
        const aboutProfile = document.querySelector('.profile__subtitle');
        nameProfile.value = name;
        aboutProfile.value = about;
    }

    getUserInfo (name, about) {
        name.value  = this._nameProfile.textContent;
        about.value = this._aboutProfile.textContent;
        return {name, about}
    }
}