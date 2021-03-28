export default class Card {
    constructor({ data, showPopup, shwoPopupSubmit, handleLikeClick}, templateSelector) {
        this._data = data;
        this._currentId = data.currentId;
        this._idOwner = data.owner._id;
        this._templateSelector = templateSelector;
        this._link = data.link;
        this._name = data.name;
        this._id = data._id
        this._showPopup = showPopup;
        this._shwoPopupSubmit = shwoPopupSubmit;
        this._handleLikeClick = handleLikeClick;
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
        this._trash = this._element.querySelector('.element__trash');
        this._like = this._element.querySelector('.element__heart-like');
        this._img = this._element.querySelector('.element__imag');
        this._likeNumber = this._element.querySelector('.element__hert-namber');
        this._likeNumber.textContent = this._data.likes.length;
        this._element.querySelector('.element__imag').src = this._data.link;
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._element.querySelector('.element__pic').value = this._data.name;
        if (this._currentId !== this._idOwner) {
            this._trash.remove();
        }

        if(this._statusLike(this._data.likes)) {
            this._like.classList.add('element__heart-like_active');
        }
        this._setEventListeners();
        return this._element;
    }

    _statusLike(data) {
        return data.some((item) => {
            return  item._id === this._currentId
        })
    }

    _removeElement(data) {
        data.closest('.element').remove();
        data = null;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeClick(this._data, this._statusLike(this._data.likes, this._currentId), this._refreshLikes, this._element, this._activeLikesStatus);
        });
        this._trash.addEventListener('click', () => {
            this._shwoPopupSubmit(this._data, this._element, this._removeElement);
        });
        this._img.addEventListener('click', () => {
            this._showPopup(this._name, this._link);
        });
    }

    _refreshLikes(data, card) {
        let numbersOfLikes = card.querySelector('.element__hert-namber');
        numbersOfLikes.textContent = data.likes.length;
    }

    _likeActive() {
        this._element.querySelector('.element__heart-like').classList.toggle('element__heart-like_active');
    }

    _activeLikesStatus(status, element) {
        const elementLike = element.querySelector('.element__heart-like');
        if(status === false){
            elementLike.classList.add('element__heart-like_active');
        } else {
            elementLike.classList.remove('element__heart-like_active');
        }
    }
}
