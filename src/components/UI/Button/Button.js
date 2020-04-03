import React from 'react';

const Button = (props) => (
    <button onClick = {props.clicked} className = {["btn", props.class].join(" ")} disabled = {props.disabled}>{props.children}</button>
);

export default Button