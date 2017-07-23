import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

import Icon from '../../Ui/Icon';

class Header extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Link to="/" className={styles.logo}>
                    Movie<span>Catalog</span>
                </Link>

                <Link to="/" className={styles.favourites}>
                    favourites <Icon iconClass="fa-heart" />
                    <span>0</span>
                </Link>
            </div>
        );
    }
}

export default Header;
