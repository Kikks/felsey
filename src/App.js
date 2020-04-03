//React modules
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// components
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

// styles
import './assets/sass/main.scss';
import Bookings from './containers/Bookings/Bookings';
import Gallery from './containers/Gallery/Gallery';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/bookings" component = {Bookings} />
        <Route path = "/gallery" component = {Gallery} />
        <Route path = "/about" component = {About} />
        <Route path = "/contact" component = {Contact} />
      </Switch>
    </Layout>
  );
}

export default App;
