import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shop/shop.component'
import Header from './component/header/header.component'
import SignUpAndSignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignUpAndSignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
