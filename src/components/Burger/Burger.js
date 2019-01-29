import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const passedIngredients = Object.keys(props.ingredients).map(igKey => {
       return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
       });
    });
    console.log(passedIngredients);
    

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {passedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;
