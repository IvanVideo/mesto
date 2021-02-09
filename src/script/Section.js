export default class Section {
<<<<<<< HEAD
    constructor({items, renderer, containerSelector}) {
        this._initialCards = items;
        this._render = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderElements() {
        this._initialCards.forEach(element => {
            this._render(element);
        });
    }
    addItems() {
        this._container.append(element)
=======
    constructor({items, renderer}, templateSelector) {
        this._items = items;
        this._renderer = renderer;
        this._templateSelector = templateSelector;
    }

    addItem() {

>>>>>>> 808f10eaafc1d61515b1c9760e317965839d1139
    }
}