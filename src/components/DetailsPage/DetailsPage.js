import React, { Component } from 'react';
import axios from 'axios';

import Movie from '../CatalogPage/Movie';

class DetailsPage extends Component {


    render() {
        const { id, movies } = this.props;

        if(movies[id] === undefined){
            return null;
        }

        return (
            <div>
                <Movie data={movies[id]} disableLink="true" />
            </div>
        );
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

export default DetailsPage;
