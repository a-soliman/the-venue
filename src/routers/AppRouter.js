import React from 'react';
import { Element } from 'react-scroll';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Featured from '../components/Featured';
import VenueInfo from '../components/VenueInfo';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Location from '../components/Location';
import Footer from '../components/Footer';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div style={{height:"1500px"}}>
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      
      <Element name='venueInfo'>
        <VenueInfo />
      </Element>
      
      <Element name='highlights'>
        <Highlights />
      </Element>
      
      <Element name='pricing'>
        <Pricing history={history} />
      </Element>
      
      <Element name='location'>
        <Location  />
      </Element>
      
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
