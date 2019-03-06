import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
        </header>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>

      </div>
    );
  }
}

export default App;