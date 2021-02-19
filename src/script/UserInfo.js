export default class UserInfo {
    constructor({nameProfile, aboutProfile}) {
        this._nameProfile = nameProfile;
        this._aboutProfile = aboutProfile;
        const popupForm = document.querySelector('.popup_profile');
        this._name = popupForm.querySelector('.popup__input_profile_name');
        this._about = popupForm.querySelector('.popup__input_profile_about');
        this._nameProfile = document.querySelector('.profile__title');
        this._aboutProfile = document.querySelector('.profile__subtitle');

    }

    setUserInfo ({name, about}) {

        this._nameProfile.textContent = name;
        this._aboutProfile.textContent = about;
        
    }

    getUserInfo () {
        return {
            name: this._nameProfile.textContent,
            about: this._aboutProfile.textContent
          };
    }
}