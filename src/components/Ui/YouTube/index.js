import React, { Component } from 'react';

import styles from './YouTube.css';

export default class YouTube extends Component {

    render() {
        const { url } = this.props;

        return (
            <iframe
                title="Trailer"
                frameBorder="0"
                src={url.replace('/watch?v=', '/embed')}
                className={styles.root}></iframe>
        );
    }
}
