import Popup from './Popup.js'
export default class PopupRemove {
    constructor({popupSelector,}) {
        super(popupSelector)
        this._popupForm = this._popup.querySelector('.popup__form');
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            super.close();
        });
    }
}