import React from 'react';

import felseylogo from '../../assets/img/Felsey.png';

const Logo = (props) => (
    <div className = {props.className}>
        <img src = {felseylogo} className = {props.imgClassName} alt = "Felsey Logo" />
    </div>
)

export default Logo;