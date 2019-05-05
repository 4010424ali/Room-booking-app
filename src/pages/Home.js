import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner tittle="luxurious rooms" subtittle="deluxe rooms starting $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
