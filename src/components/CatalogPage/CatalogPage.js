import React, { Component } from 'react';

import Movie from './Movie';

class CatalogPage extends Component {
    render() {
        const { movies } = this.props;

        if (movies.length === 0) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                {this.renderMovies(movies)}
            </div>
        );
    }

    renderMovies(movies) {
        return movies.reduce(function (output, element) {
            output.push(
                <Movie key={output.length} data={element} />
            );
            return output;
        }, [])
    }
}

export default CatalogPage;
