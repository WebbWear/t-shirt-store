import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import shirts from '../Data/shirts.json'

class ShirtList extends Component {

    componentDidMount() {
        console.log({ data: shirts, keys: Object.keys(shirts) })
    }
    render() {
        return (
            <div className="body">

                {Object.keys(shirts).map(( shirtKey, i ) => {
                    return <section className="image-card" key={i}>
                        <header><Link to={`/${shirtKey}`}>{shirts[shirtKey].title}</Link></header>
                        <p>{shirts[shirtKey].description}</p>
                        <img src={shirts[shirtKey].photos[0].imageURL} alt={shirts[shirtKey].photos[0].title} />
                    </section>
                })}
            </div>
        );
    }
}

export default ShirtList;
