import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Block from '../Ui/Block';

import styles from './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Block customClass={styles.block}>
                    Welcome in <strong>MovieCatalog</strong>!
                </Block>

                <Block customClass={styles.block}>
                    <Link to="/catalog" className={styles.link}>
                        Go to our movies &rsaquo;
                    </Link>
                </Block>
            </div>
        );
    }
}