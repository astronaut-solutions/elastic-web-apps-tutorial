import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './MainLayout.css';

import Header from './Header';
import Footer from './Footer';

import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';
import CatalogPage from '../CatalogPage';
import FavouritesPage from '../FavouritesPage';
import DetailsPage from '../DetailsPage';

export default class MainLayout extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Header />

                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/catalog" component={CatalogPage} />
                        <Route exact path="/catalog/:id" component={DetailsPage} />
                        <Route exact path="/favourites" component={FavouritesPage} />
                        
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}
