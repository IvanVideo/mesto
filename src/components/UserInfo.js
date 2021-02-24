export default class UserInfo {
    constructor({nameProfile, aboutProfile}) {
        this._nameProfile = nameProfile;
        this._aboutProfile = aboutProfile;
        this._nameProfile = document.querySelector('.profile__title');
        this._aboutProfile = document.querySelector('.profile__subtitle');
        this._name = '';
        this._about = '';
        this._avatar = '';
        this._id = '';
    }

    setUserInfo ({name, about, avatar, _id}) {
        this._name = name;
        this._about = about;
        this._name = avatar;
        this._about = _id;
        this._nameProfile.textContent = name;
        this._aboutProfile.textContent = about;
    }

    getUserInfo () {
        return {
            name: this._name,
            about: this._about,
            userAvatar: this._avatar
          };
    }

    getMyId() {
        return this._id
    }

    setUserId(id) {
        this._userId = id;
    }

    returnUserId() {
        return this._userId
    }
}