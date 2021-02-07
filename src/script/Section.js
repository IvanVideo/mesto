export default class Section {
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
    }
}