import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }
    
    open(name, link) {
        const popupImg = this._popup.querySelector('.popup__pic')
        popupImg.value = name;
        popupImg.src = link;
        this._popup.querySelector('.popup__subtitle').textContent = name;
        super.open();
    }
}
