import React, { Component } from 'react';

import Movie from '../CatalogPage/Movie';

class FavouritesPage extends Component {
    render() {
        return (
            <div>
                <Movie />
                <Movie />
            </div>
        );
    }
}

export default FavouritesPage;
