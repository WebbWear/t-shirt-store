import React, { Component } from 'react';

import hobbies from '../Data/shirts.json'


class ShirtDetail extends Component {
    render() {
        const _category = this.props.match.params.category;
        const _index = this.props.match.params.index;
        const _photoData = shirts[_category].photos[_index]
        return (
            <div>
            <header>{_photoData.title}</header>
            <img src={_photoData.imageURL} alt={_photoData.title} />
            <a href={_photoData.sourceURL}>Source</a>

            </div>
        );
    }
}

export default ShirtDetail;
