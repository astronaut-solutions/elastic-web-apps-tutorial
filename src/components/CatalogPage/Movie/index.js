import React, { Component } from 'react';
import { inject } from 'mobx-react';


import Block from '../../Ui/Block';
import Button from '../../Ui/Button';

import styles from './Movie.css';



@inject('store')
export default class Movie extends Component {
    render() {
        const { data, disableLink, withoutShadow, favourites } = this.props;

        return (
            <Block customClass={`${styles.root} ${withoutShadow !== undefined ? styles.withoutBoxShadow : ''}`}>
                {this.renderContent(data)}
                {this.renderButton(data, disableLink, favourites)}
            </Block>
        );
    }

    renderContent(data) {
        return <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.poster} alt={data.title} />
        </div>;
    }

    renderButton(data, disableLink, favourites) {


        if (disableLink !== undefined) {
            return null;
        }

        let buttons = [];
        if (favourites !== undefined) {
            buttons.push(<Button
                key="remove"
                customClass={styles.remove}
                onClick={(event) => { this.handleRemoveFromFavourites(data.id); event.preventDefault(); }}>Remove from favourites</Button>);
        }

        buttons.push(<Button
            key="details"
            to={`/catalog/${data.id}`}>Show details</Button>);

        return buttons;
    }

    handleRemoveFromFavourites(id) {
        const { store } = this.props;
        store.removeFromFavourites(id);
    }
}

