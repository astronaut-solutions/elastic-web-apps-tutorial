import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Movie from '../CatalogPage/Movie';
import Icon from '../Ui/Icon';
import Block from '../Ui/Block';
import Button from '../Ui/Button';
import YouTube from '../Ui/YouTube';

import styles from './DetailsPage.css';


@observer
class DetailsPage extends Component {


    render() {
        const { id, movies, saveToFavourites, isInFavourites } = this.props;

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
                    customClass={`${styles.saveTo} ${isInFavourites ? styles.saved : ''}`}>
                    Save to favourites <Icon iconClass="fa-heart" />
                </Button>

                <YouTube url={movies[id].trailer} />


            </Block>
        );
    }
}

export default DetailsPage;
