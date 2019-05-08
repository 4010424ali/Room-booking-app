import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

class Singleroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  // componentDidMount() {}
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such Room found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner tittle={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size}SQRT</h6>
              <h6>
                Max Capacity:{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} Person`}
              </h6>
              <h6>{pets ? 'Pet are allowed' : 'No pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default Singleroom;
