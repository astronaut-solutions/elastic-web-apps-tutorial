import React, { Component } from 'react';

import GetMovies from '../GetMovies';
import CatalogPage from './CatalogPage';

export default class CatalogContainerPage extends Component {

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
        this.getMovies = new GetMovies((response) => {
            this.setState({
                movies: response.data
            });
        });

        this.getMovies.get();
    }
}

