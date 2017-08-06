import React, { Component } from 'react';

import Block from '../Ui/Block';
import Movie from './Movie';

export default class CatalogPage extends Component {
    render() {
        const { movies } = this.props;

        if (movies.length === 0) {
            return (
                <Block>
                    Loading...
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
        return movies.reduce(function (output, element) {
            output.push(
                <Movie key={output.length} data={element} />
            );
            return output;
        }, []);
    }
}
