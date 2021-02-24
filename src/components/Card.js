export default class Card {
    constructor({data, showPopup}, templateSelector) {
        this._data = data;
        this._currentId = data.currentId;
        this._idOwner = data.owner._id;
        this._templateSelector = templateSelector;
        this._link = data.link;
        this._name = data.name;
        this._showPopup = showPopup;
    }
    _getTemplate() {
        const productElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return productElement;
    }

    render() {
        this._element = this._getTemplate();
        this._setEventListeners();
        
        this._element.querySelector('.element__imag').src = this._data.link;
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._element.querySelector('.element__pic').value = this._data.name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__heart-like').addEventListener('click', () => {
            this._likeActive();
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._removeElement();
        });
        this._element.querySelector('.element__imag').addEventListener('click', () => {
            this._showPopup(this._name, this._link);
        });
    }


    _likeActive() {
        this._element.querySelector('.element__heart-like').classList.toggle('element__heart-like_active');
    }

    _removeElement() {

        this._element.closest('.element').remove();
        this._element = null;
    }
}
