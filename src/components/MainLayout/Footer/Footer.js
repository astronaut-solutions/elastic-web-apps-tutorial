import React, { Component } from 'react';

import styles from './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
               &copy; copyright 2017 - MovieCatalog
            </div>
        );
    }
}

export default Footer;
