export default class Card {
    constructor(initialCards, templateSelector, showPopup) {
        this._initialCards = initialCards;
        this._templateSelector = templateSelector;
        this._link = initialCards.link;
        this._name = initialCards.name;
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
        
        this._element.querySelector('.element__imag').src = this._initialCards.link;
        this._element.querySelector('.element__title').textContent = this._initialCards.name;
        this._element.querySelector('.element__pic').value = this._initialCards.name;

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
            this._showPopup(this._link, this._name);
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
