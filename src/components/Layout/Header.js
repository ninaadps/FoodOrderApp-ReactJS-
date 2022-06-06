import React from "react";
import classes from './Header.module.css'
import mealsimage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>
{
  return (
   <React.Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={mealsimage} alt="Delicious fooooood!" />
      </div>
  </React.Fragment>
  );
}

export default Header;