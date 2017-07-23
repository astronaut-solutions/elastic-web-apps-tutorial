import React, { Component } from 'react';

class DetailsPage extends Component {
    render() {
        const { match } = this.props;
        const { params } = match;

        return (
            <div>
                DetailsPage
                {params.id}
            </div>
        );
    }
}

export default DetailsPage;
