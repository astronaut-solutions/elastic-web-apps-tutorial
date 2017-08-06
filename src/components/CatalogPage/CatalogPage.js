import React, { Component } from 'react';

import Block from '../Ui/Block';
import Movie from './Movie';

export default class CatalogPage extends Component {
    render() {
        const { movies, favourites } = this.props;

        if (movies.length === 0) {
            return (
                <Block>
                    {favourites === null ? 'Loading...' : 'Empty favourites list'}
                </Block>
            );
        }

        return (
            <div>
                {this.renderMovies(movies)}
            </div>
        );
    }

    renderMovies(movies) {
        const { favourites } = this.props;

        return movies.reduce(function (output, element) {
            output.push(
                <Movie key={output.length} data={element} favourites={favourites} />
            );
            return output;
        }, []);
    }
}
