import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.css';

class Button extends Component {

    render() {
        const { to, children } = this.props;

        return (
            <Link
                to={to}
                className={styles.root}>
                {children}
            </Link>
        );
    }
}

export default Button;
