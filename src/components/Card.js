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
        this._activeLike(this._statusLike(this._data.likes, this._currentId));
        if (this._currentId !== this._idOwner) {
            this._trash.remove();
        }

        this._setEventListeners();
        return this._element;
    }

    _activeLike(data) { 
        if(data === true){
            this._element.querySelector('.element__heart-like').classList.toggle('element__heart-like_active');
        }
    }

    _statusLike(data) {
        return data.some((item) => {
            return  item._id === this._currentId
        })
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeClick(this._id, this._statusLike(this._data.likes, this._currentId));
        });
        this._trash.addEventListener('click', () => {
            this._shwoPopupSubmit(this._data, this._element)
        });
        this._img.addEventListener('click', () => {
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
