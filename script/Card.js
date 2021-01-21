export default class Card {
    constructor(initialCards, templateSelector) {
        this._initialCards = initialCards;
        this._templateSelector = templateSelector;
    }
    _getTemplate() {
        const productElement = document
        .querySelector('.template')
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
    }


    _likeActive() {
        this._element.querySelector('.element__heart-like').classList.toggle('element__heart-like_active');
    }

    _removeElement() {
        this._element.closest('.element').remove();
    }

}
