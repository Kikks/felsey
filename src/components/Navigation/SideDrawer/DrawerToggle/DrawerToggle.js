import React from 'react';

const DrawerToggle = (props) => {
    let toggle = null;
    if(props.sideDrawerShown){
        toggle = "drawer-toggle__burger--x";
        return(
            <div className = "drawer-toggle" onClick = {props.clicked}>
                <div className = {toggle} ></div>
            </div>
        );
    }else{
        toggle = "drawer-toggle__burger";
        return (
            <div className = "drawer-toggle" onClick = {props.clicked}>
                <div className = {toggle} ></div>
            </div>
        );
    }
};
    
export default DrawerToggle;