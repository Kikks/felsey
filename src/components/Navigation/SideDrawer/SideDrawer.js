import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Auxilliary from '../../../hoc/Auxiliary/Auxilliary';

const SideDrawer = (props) => {
    let assignedClasses = ["sidedrawer" , "sidedrawer--closed"];

    if(props.open){
        assignedClasses = ["sidedrawer", "sidedrawer--open"];
    }

    return(
        <Auxilliary>
        <div className = {assignedClasses.join(" ")}>
            <ul className = "sidedrawer__nav">
                <NavigationItems closed = {props.closed}/> 
            </ul>   
        </div>
    </Auxilliary>
    );
}

export default SideDrawer;