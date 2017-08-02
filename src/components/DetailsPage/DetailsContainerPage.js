import React, { Component } from 'react';
import axios from 'axios';

import DetailsPage from './DetailsPage';

class DetailsContainerPage extends Component {

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
        this.getMovies();
    }

    getMovies() {
        axios.get('/api/movies.json')
            .then((response) => {

                this.setState({
                    movies: this.formatMovies(response.data)
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    formatMovies(responseData) {
        return responseData.reduce(function (output, element) {
            output[element.id] = element;
            return output;
        }, {});
    }

    saveToFavourites(){
        
    }
}

export default DetailsContainerPage;
