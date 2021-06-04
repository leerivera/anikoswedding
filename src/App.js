import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Details from './components/pages/Details';
import SignUp from './components/pages/SignUp';
import Cards from './components/pages/Cards'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/details' component={Details} />
          <Route path='/cards' component={Cards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
