import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Auxilliary from '../../../hoc/Auxiliary/Auxilliary';


class Toolbar extends Component {
    state = {
        activeClass: "nav"
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                this.setState({activeClass: "nav sticky"});
            }else{
                this.setState({activeClass: "nav"})
            }
        })
    }

    render(){
        return (
            <Auxilliary>
            <DrawerToggle clicked = {this.props.toggleDrawerClicked} sideDrawerShown = {this.props.sideDrawerShown}/>
            <nav className = {this.state.activeClass}>
                <div className = "nav__content">
                    <Link to ="/" exact = "true" className = "nav__logo-box"><Logo className = "nav__logo" imgClassName = "nav__logo-img"/></Link>   
                    <ul className = "nav__list">
                        <NavigationItems />
                    </ul>
                </div>
            </nav>
        </Auxilliary>
        );
    }
    
};

export default Toolbar;