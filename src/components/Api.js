export default class Api {
    constructor({ url, headers, groupId}) {
        this._url = url;
        this._headers = headers;
        this._groupId = groupId;
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка на сервере`)
    }

    getAllInfo() {
        return Promise.all([this.getUserInfo(), this.getCards()]);
    }

    getCards() {
        return fetch(`${this._url}/${this._groupId}/cards`, {
            headers: this._headers,
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    getUserInfo() {
        return fetch(`${this._url}/${this._groupId}/users/me`, {
            headers: this._headers,
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    addNewItem(data) {
        return fetch(`${this._url}/${this._groupId}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    deleteItem(id) {
        return fetch(`${this._url}/${this._groupId}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify({
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    editProfileInfo(data) {
        return fetch(`${this._url}/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    editAvatar(data) {
        return fetch(`${this._url}/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }

    setLike(id) {
        return fetch(`${this._url}/${this._groupId}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify({
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }
    
    removeLike(id) {
        return fetch(`${this._url}/${this._groupId}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify({
            })
        })
            .then(res => {
                return this._getResponseData(res);
            })
    }


}