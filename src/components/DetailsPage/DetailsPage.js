import React, { Component } from 'react';

import Movie from '../CatalogPage/Movie';
import Icon from '../Ui/Icon';

import styles from './DetailsPage.css';

class DetailsPage extends Component {


    render() {
        const { id, movies, saveToFavourites } = this.props;

        if (movies[id] === undefined) {
            return null;
        }

        return (
            <div className={styles.root}>
                <Movie
                    data={movies[id]}
                    disableLink="true"
                    withoutShadow="true" />

                <span
                    onClick={saveToFavourites}
                    className={styles.saveTo}>
                    Save to favourites <Icon iconClass="fa-heart" />
                </span>
            </div>
        );
    }
}

export default DetailsPage;
