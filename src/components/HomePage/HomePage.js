import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import styles from './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.hero}>
                    Welcome in <strong>MovieCatalog</strong>!
                </div>

                <Link to="/catalog" className={styles.link}>
                    Go to our movies &rsaquo;
                </Link>
            </div>
        );
    }
}

export default HomePage;
