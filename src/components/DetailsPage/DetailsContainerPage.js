import React, { Component } from 'react';
import axios from 'axios';

import DetailsPage from './DetailsPage';

class DetailsContainerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: {}
        };
    }

    render() {
        const { movies } = this.state;
        const { match } = this.props;
        const { params } = match;

        return (
            <DetailsPage
                movies={movies}
                id={params.id} />
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

    formatMovies(responseData) {
        return responseData.reduce(function (output, element) {
            output[element.id] = element;
            return output;
        }, {});
    }
}

export default DetailsContainerPage;
