import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Movie.css';

class Movie extends Component {
    render() {
        const { data } = this.props;

        return (
            <Link to={`/catalog/${data.id}`} className={styles.root}>
                <h1>{data.title}</h1>
                <img src={data.poster} alt={data.title} />
            </Link>
        );
    }
}

export default Movie;
