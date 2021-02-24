export default class Api {
    constructor({ url, headers, groupId, avatar, link, name}) {
        this._url = url;
        this._headers = headers;
        this._groupId = groupId;
        this._avatar = avatar;
        this._link = link;
        this._name = name;
    }

    getAllInfo() {
        return Promise.all([this.getUserInfo(), this.getCards()]);
    }

    getCards() {
        return fetch(`${this._url}/${this._groupId}/cards`, {
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка на сервере`)
            })
    }

    getUserInfo() {
        return fetch(`${this._url}/${this._groupId}/users/me`, {
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка на сервере`)
            })
    }

    getProfileInfo() {
        return fetch(`${this._url}/`)
    }

    addNewItem() {
        return fetch(`${this._url}/cohortId/cards`, {
            headers: this._headers,
            body: JSON.stringify({
                name: this._name,
                link: this._link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка на сервере`)
            })
    }



    // changeAvatar() {
    //     return fetch(`${this._url}/cohortId/users/me/avatar`, {
    //         headers: this._headers,
    //         body: JSON.stringify({
    //             avatar: this._avatar
    //         })
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //             return Promise.reject(`Ошибка на сервере`)
    //         })
    // }



    // profileSubmit() {
    //     return fetch(`${this._url}`, {
    //         method: 'PATCH',
    //         headers: {
    //           authorization: '9ac744e3-19c4-448e-a05d-54fc2dcca7b2',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           name: 'Marie Skłodowska Curie',
    //           about: 'Physicist and Chemist'
    //         })
    //       });
    // }
}