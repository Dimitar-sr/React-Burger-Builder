import React, { Component } from 'react';
import Outside from '../../hoc/Outside';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
      <Outside>
          <Burger ingredients={this.state.ingredients} />
          <div>Burger Controls</div>
      </Outside>
    )
  }
}

export default BurgerBuilder;
