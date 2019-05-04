import React, { Component } from "react";
import { Link } from "react-router-dom";
import shirts from "../Data/shirts.json";

class ShirtList extends Component {
  componentDidMount() {
    console.log({ data: shirts, keys: Object.keys(shirts) });
  }
  render() {
    return (
      <div className="body">
        <section>
          {shirts.shirts.photos.map((shirt, i) => {
            return (
              <section className="image-card" key={i}>
                <Link to={`/${i}`}>
                  <header>{shirt.title}</header>
                  <p>{shirts.description}</p>
                  <img src={shirt.imageURL} alt={shirts.title} />
                </Link>
              </section>
            );
          })}
          ;
        </section>
      </div>
    );
  }
}

export default ShirtList;
