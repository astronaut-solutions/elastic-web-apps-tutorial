import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import GetMovies from '../GetMovies';
import DetailsPage from './DetailsPage';

@inject('store')
@observer
export default class DetailsContainerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: {},
            inFavourites: false
        };

        this.saveToFavourites = this.saveToFavourites.bind(this);
        this.isInFavourites = this.isInFavourites.bind(this);
    }

    render() {
        const { movies } = this.state;
        const { match } = this.props;
        const { params } = match;

        return (
            <DetailsPage
                movies={movies}
                id={params.id}
                saveToFavourites={(event) => { event.preventDefault(); this.saveToFavourites(params.id); }}
                isInFavourites={this.isInFavourites(params.id)} />
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

    saveToFavourites(id) {
        const { store } = this.props;
        const { movies } = this.state;

        if (movies[id] === undefined) {
            return;
        }

        if (store.getFromFavourites(id) !== null) {
            store.removeFromFavourites(id);
        } else {
            store.addToFavourites(id, movies[id]);
        }
    }

    isInFavourites(id) {
        const { store } = this.props;
        return store.getFromFavourites(id) !== null;
    }
}