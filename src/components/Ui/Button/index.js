import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.css';

export default class Button extends Component {

    render() {
        const { to, children, customClass } = this.props;

        return (
            <Link
                to={to || ''}
                className={`${styles.root} ${customClass || ''}`}>
                {children}
            </Link>
        );
    }
}
