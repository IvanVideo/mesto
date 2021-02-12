// export default class UserInfo {
//     constructor({nameProfile, aboutProfile}) {
//         this._nameProfile = nameProfile;
//         this._aboutProfile = aboutProfile;
//         this._popupForm = this._popup.querySelector('.popup__form');
//         this._name = ;
//         this._about = ;
//     }

//     updateUserInfo = () => {
//         this._nameElement.textContent = this._name;
//         this._aboutElement.textContent = this._about;
//     }

//     // возвращает объект с данными пользователя
//     getUserInfo() {
//         this._userInfoList = this._popupForm.querySelectorAll('.popup__input');
//         this._inputsValues = {};

//         this._userInfoList.forEach(input => {
//             this._inputsValues[input.name] = input.value;

//         });

//         return {
//             name: this._name,
//             about: this._about,
//         };
//     }

//     // принимает новые данные о пользователе и добавляет на страницу
//     setUserInfo(newName, newAbout) {
//         this._name = newName;
//         this._about = newAbout;
//     }
// }