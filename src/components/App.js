import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './Navbar';
import Home from './Home';
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp';

import '../styles/app.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={ Login } />
        <Route path='/sign-up' component={ SignUp }/>
      </Switch>
    </>
  );
}

export default App;
