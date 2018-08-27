import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import shirts from '../Data/shirts.json';

class PhotoList extends Component {

    render() {
        const _category = this.props.match.params.category
        const _categoryData = shirts[_category]
        if (!_categoryData){
            return <h3>Ooooo Noooo your outa luck! Nothing to see here.</h3>
        } else {
            return (
                <div>
                    <header>{_categoryData.title}</header>
                    <p>{_categoryData.description}</p>
                    <section>
                        {
                            _categoryData.photos.map((photo, i) => {
                                return <Link to={`/${_category}/${i}`}>
                                    <img src={photo.imageURL} alt={photo.title} />
                                </Link> 
                            })
                        }
                    </section>
                </div>
            );
        }
    }
}

export default PhotoList;