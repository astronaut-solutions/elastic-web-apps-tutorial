import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Movie.css';

class Movie extends Component {
    render() {
        const { data, disableLink } = this.props;

        if (disableLink !== undefined) {
            return (
                <div className={styles.root}>
                    {this.renderContent(data)}
                </div>
            );
        }


        return (
            <Link to={`/catalog/${data.id}`} className={styles.root}>
                {this.renderContent(data)}
            </Link>
        );
    }

    renderContent(data) {
        return <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.poster} alt={data.title} />
        </div>;
    }
}

export default Movie;
