import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
        </header>
        <Layout>
          <BurgerBuilder />
        </Layout>
        
      </div>
    );
  }
}

export default App;
