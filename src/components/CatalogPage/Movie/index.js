import React, { Component } from 'react';

import Block from '../../Ui/Block';
import Button from '../../Ui/Button';

import styles from './Movie.css';

export default class Movie extends Component {
    render() {
        const { data, disableLink, withoutShadow } = this.props;

        return (
            <Block customClass={`${styles.root} ${withoutShadow !== undefined ? styles.withoutBoxShadow : ''}`}>
                {this.renderContent(data)}
                {this.renderButton(data, disableLink)}
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

    renderButton(data, disableLink) {
        if (disableLink !== undefined) {
            return null;
        }

        return <Button
            to={`/catalog/${data.id}`}>Show details</Button>
    }
}

