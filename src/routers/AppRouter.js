import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import Featured from '../components/Featured';
import VenueInfo from '../components/VenueInfo';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div style={{height:"1500px"}}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
    </div>
  </Router>
);

export default AppRouter;
