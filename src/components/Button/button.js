import React from 'react';
import Styles from './button.module.scss';

const Button = ({ clickHandler }) => {
    return ( <button className={Styles.button} type="button" onClick={clickHandler}>GO!</button> );
}
 
export default Button;