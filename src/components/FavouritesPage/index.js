import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import CatalogPage from '../CatalogPage/CatalogPage.js';


@inject('store')
@observer
export default class FavouritesPage extends Component {
    render() {
        const { store } = this.props;
        const movies = Object.keys(store.favourites).map(function (key) { return store.favourites[key]; });
        return (
            <CatalogPage movies={movies} favourites="true" />
        );
    }
}
