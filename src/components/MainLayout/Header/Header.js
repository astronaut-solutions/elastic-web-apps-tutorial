import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.css';

import Icon from '../../Ui/Icon';

class Header extends Component {
    render() {
        const { history } = this.props;

        return (
            <div className={styles.root}>
                <a
                    onClick={() => { history.goBack(); console.log(history) }}
                    className={`${styles.back} ${history.location.pathname === '/' ? styles.hide : ''}`}>
                    &lsaquo;
                </a>

                <Link to="/" className={styles.logo}>
                    Movie<span>Catalog</span>
                </Link>

                <Link to="/favourites" className={styles.favourites}>
                    favourites <Icon iconClass="fa-heart" />
                    <span>20</span>
                </Link>
            </div>
        );
    }
}

export default withRouter(Header);
