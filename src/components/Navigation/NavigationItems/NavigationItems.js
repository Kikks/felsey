import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Auxilliary from '../../../hoc/Auxiliary/Auxilliary';

const NavigationItems = (props) => (
    <Auxilliary>
        <NavigationItem closeSideDrawer = {props.closed} link = "/" exact = {true}>Home</NavigationItem>
        <NavigationItem closeSideDrawer = {props.closed} link = "/bookings">Bookings</NavigationItem>
        <NavigationItem closeSideDrawer = {props.closed} link = "/gallery">Gallery</NavigationItem>
        <NavigationItem closeSideDrawer = {props.closed} link = "/about">About</NavigationItem>
        <NavigationItem closeSideDrawer = {props.closed} link = "/contact">contact</NavigationItem>
    </Auxilliary>
);

export default NavigationItems;