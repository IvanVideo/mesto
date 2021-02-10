export default class Section {

    constructor({data, renderer}, containerSelector) {
        this._initialCards = data;
        this._render = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderElements() {
        this._initialCards.forEach(data => {
            this._render(data);
        });
    }
    addItems(element) {
        this._container.append(element);
    }
}