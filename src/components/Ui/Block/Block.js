import React, { Component } from 'react';

import styles from './Block.css';

class Block extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={styles.root}>
                {children}
            </div>
        );
    }
}

export default Block;
