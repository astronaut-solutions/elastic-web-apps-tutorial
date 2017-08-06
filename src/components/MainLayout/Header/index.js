import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import styles from './Header.css';

import Icon from '../../Ui/Icon';

@inject('store')
@observer
class Header extends Component {
    render() {
        const { history } = this.props;

        return (
            <div className={styles.root}>
                <a
                    onClick={() => { history.goBack(); }}
                    className={`${styles.back} ${history.location.pathname === '/' ? styles.hide : ''}`}>
                    &lsaquo;
                </a>

                <Link to="/" className={styles.logo}>
                    Movie<span>Catalog</span>
                </Link>

                <Link to="/favourites" className={styles.favourites}>
                    <b>favourites</b> <Icon iconClass="fa-heart" />
                    {this.getCounter()}
                </Link>
            </div>
        );
    }

    getCounter() {
        const { store } = this.props;

        let length = Object.keys(store.favourites).length;

        if (length === 0) {
            return null;
        }

        return (<span>{length}</span>);
    }
}

export default withRouter(Header);
