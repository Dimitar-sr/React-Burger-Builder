import React, { Component } from 'react';
import Outside from '../../hoc/Outside';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
      <Outside>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls />
      </Outside>
    )
  }
}

export default BurgerBuilder;
