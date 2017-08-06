import React, { Component } from 'react';

import GetMovies from '../GetMovies';
import DetailsPage from './DetailsPage';

export default class DetailsContainerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: {}
        };

        this.saveToFavourites = this.saveToFavourites.bind(this);
    }

    render() {
        const { movies } = this.state;
        const { match } = this.props;
        const { params } = match;

        return (
            <DetailsPage
                movies={movies}
                id={params.id}
                saveToFavourites={this.saveToFavourites} />
        );
    }


    componentDidMount() {
        this.getMovies = new GetMovies((response) => {
            this.setState({
                movies: this.formatMovies(response.data)
            });
        });

        this.getMovies.get();
    }


    formatMovies(responseData) {
        return responseData.reduce(function (output, element) {
            output[element.id] = element;
            return output;
        }, {});
    }

    saveToFavourites() {

    }
}