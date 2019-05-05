import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function Error() {
  return (
    <Hero>
      <Banner tittle="404" subtittle="Page not found">
        <Link className="btn-primary" to="/">
          return Home
        </Link>
      </Banner>
    </Hero>
  );
}
