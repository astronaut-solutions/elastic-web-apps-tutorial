import { observable } from 'mobx';

export default class Store {
    @observable favourites = {};
    favouritesKey = 'favourites';

    constructor() {
        this.refreshFavourites();
    }


    addToFavourites(id, data) {
        this.favourites[id] = data;
        this.setToLocalStorage(this.favouritesKey, this.favourites);
    }

    removeFromFavourites(id) {
        if (this.favourites[id] !== undefined) {
            delete this.favourites[id];
        }

        this.setToLocalStorage(this.favouritesKey, this.favourites);
    }

    getFromFavourites(id) {
        if (this.favourites[id] !== undefined) {
            return this.favourites[id];
        }

        return null;
    }


    getLocalStorage() {
        if (localStorage === undefined || localStorage === null) {
            throw new DOMException();
        }

        return localStorage;
    }

    getFromLocalStorage(key) {
        const storage = this.getLocalStorage();
        return JSON.parse(storage.getItem(key));
    }


    setToLocalStorage(key, value) {
        const storage = this.getLocalStorage();
        storage.setItem(key, JSON.stringify(value));
        this.refreshFavourites();
    }

    refreshFavourites(){
        this.favourites = this.getFromLocalStorage('favourites');
        if (this.favourites === null) {
            this.favourites = {};
        }
    }
}