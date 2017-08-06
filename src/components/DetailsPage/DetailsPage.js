import React, { Component } from 'react';

import Movie from '../CatalogPage/Movie';
import Icon from '../Ui/Icon';
import Block from '../Ui/Block';
import Button from '../Ui/Button';

import styles from './DetailsPage.css';

class DetailsPage extends Component {


    render() {
        const { id, movies, saveToFavourites } = this.props;

        if (movies[id] === undefined) {
            return null;
        }

        return (
            <Block customClass={styles.root}>
                <Movie
                    data={movies[id]}
                    disableLink="true"
                    withoutShadow="true" />

                <Button
                    onClick={saveToFavourites}
                    customClass={`${styles.saveTo} ${styles.saveToSaved}`}>
                    Save to favourites <Icon iconClass="fa-heart" />
                </Button>
            </Block>
        );
    }
}

export default DetailsPage;
