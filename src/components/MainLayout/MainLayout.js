import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './MainLayout.css';

import Header from './Header';
import Footer from './Footer';

import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';

class MainLayout extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Header />

                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}

export default MainLayout;
