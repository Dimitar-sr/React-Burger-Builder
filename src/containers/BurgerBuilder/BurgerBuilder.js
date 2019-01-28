import React, { Component } from 'react';
import Outside from '../../hoc/Outside';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Outside>
          <Burger></Burger>
          <div>Burger Controls</div>
      </Outside>
    )
  }
}

export default BurgerBuilder;
