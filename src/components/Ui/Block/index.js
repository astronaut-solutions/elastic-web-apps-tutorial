import React, { Component } from 'react';

import styles from './Block.css';

export default class Block extends Component {

    render() {
        const { children, customClass } = this.props;

        return (
            <div className={`${styles.root} ${customClass || ''}`}>
                {children}
            </div>
        );
    }
}
