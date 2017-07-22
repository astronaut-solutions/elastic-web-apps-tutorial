import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';

class MainLayout extends Component {
    render() {
        return (
            <div>
                MainLayout
                
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default MainLayout;
