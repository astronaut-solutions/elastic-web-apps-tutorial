import React, { Component } from 'react';

import styles from './css/font-awesome.min.css';

class Icon extends Component {

    render() {
        const { iconClass } = this.props;

        let faClass = '';
        if (styles[iconClass] !== undefined) {
            faClass = styles[iconClass];
        }

        return (
            <i className={`${styles.fa} ${faClass}`}></i>
        );
    }
}

export default Icon;
