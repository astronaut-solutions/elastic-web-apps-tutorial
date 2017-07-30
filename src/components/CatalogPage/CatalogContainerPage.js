import React, { Component } from 'react';
import axios from 'axios';

import CatalogPage from './CatalogPage';

class CatalogContainerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'movies': []
        };
    }

    render() {
        const { movies } = this.state;

        return (
            <CatalogPage movies={movies} />
        );
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        axios.get('/api/movies.json')
            .then(function (response) {
                this.setState({
                    movies: response.data
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default CatalogContainerPage;
