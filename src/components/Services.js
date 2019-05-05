import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Tittle from './Tittle';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktail',
        info:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, praesentium?'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, praesentium?'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, praesentium?'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, praesentium?'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Tittle tittle="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
