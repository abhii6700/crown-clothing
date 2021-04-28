import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import {auth} from './firebase/firebase.utils'

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shop/shop.component'
import Header from './component/header/header.component'
import SignUpAndSignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      CurrentUser: null
    }
  }

  unsubscribeFromAuth =  null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({CurrentUser: user});
  
  console.log(user)
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.CurrentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignUpAndSignInPage}/>
        </Switch>
      </div>
    );
    }
  
}

export default App;
