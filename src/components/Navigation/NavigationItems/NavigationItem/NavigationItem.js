import React from 'react';
import {NavLink} from 'react-router-dom';


const NavigationItem = (props) => (
     <li className = "nav__list-item">
         <NavLink className = "nav__link" to = {props.link} exact = {props.exact} activeClassName = "nav__link--active" onClick = {props.closeSideDrawer}>{props.children}</NavLink>
    </li>
)

export default NavigationItem;