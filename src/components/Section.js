export default class Section {
    constructor(renderItem, containerSelector) {
        // this._initialCards = data;
        this._render = renderItem;
        this._container = document.querySelector(containerSelector);
    }
    renderElements(data) {
        data.forEach(item => {
            this._render(item);
        });
    }
    addItems(element, before = false) {
        if(before){
            this._container.append(element);
        } else {
            this._container.append(element);
        }     
    }
}