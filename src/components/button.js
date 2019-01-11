import React from 'react';

const Button = ({ clickHandler }) => {
    return ( <button type="button" onClick={clickHandler}>GO!</button> );
}
 
export default Button;