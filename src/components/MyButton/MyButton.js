
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyButton.module.css';

export default function Button (props){
    let rendOut=props.out;
  return (
    <button
      className={classes.btngrad }
    >
      {rendOut && <a href={props.href}>{props.children}</a>}
      {!rendOut && <Link to={props.href}>{props.children}</Link>}
    </button>
  );
};

