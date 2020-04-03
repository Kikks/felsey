import React, { Component } from 'react';

import {ReactComponent as Facebook} from '../../../assets/img/SVG/facebook-original.svg';
import {ReactComponent as Instagram} from '../../../assets/img/SVG/instagram-original.svg';
import {ReactComponent as Twitter} from '../../../assets/img/SVG/twitter-original.svg';
import {ReactComponent as Telegram} from '../../../assets/img/SVG/telegram.svg';
import {ReactComponent as Chef} from '../../../assets/img/SVG/chef-hat.svg';
import {ReactComponent as Service} from '../../../assets/img/SVG/service.svg';
import {ReactComponent as Heart} from '../../../assets/img/SVG/heart.svg';
import {ReactComponent as Star} from '../../../assets/img/SVG/star.svg';



class SocialMediaIcon extends Component{
    render(){
        let icon = null;
        let classes = this.props.className;

        switch (this.props.icon){
            case ('facebook'):
                icon = <a key = {this.props.icon} className = {classes} href = "https://www.facebook.com/FelseyVentures" target = "_blank" rel = "noopener noreferrer"><Facebook className = {this.props.svgClass} /></a>;
                break;
            case ('instagram'):
                icon = <a key = {this.props.icon} className = {classes} href = "https://www.instagram.com/FelseyVentures" target = "_blank" rel = "noopener noreferrer"><Instagram className = {this.props.svgClass} /></a>;
                break;
            case ('twitter'):
                icon = <a key = {this.props.icon} className = {classes} href = "https://www.twitter.com/FelseyVentures" target = "_blank" rel = "noopener noreferrer"><Twitter className = {this.props.svgClass} /></a>;
                break;
            case ('telegram'):
                icon = <a key = {this.props.icon} className = {classes} href = "https://www.telegram.com/FelseyVentures" target = "_blank" rel = "noopener noreferrer"><Telegram className = {this.props.svgClass} /></a>;
                break;
            case ('chef'):
                icon = <Chef key = {this.props.icon} className = {classes} />;
                break;
            case ('service'):
                icon = <Service key = {this.props.icon} className = {classes} />;
                break;
            case ('heart'):
                icon = <Heart key = {this.props.icon} className = {classes} />;
                break;
            case ('star'):
                icon = <Star key = {this.props.icon} className = {classes} />;
                break;

            default:
                icon = null;
        }

        return(
            [icon]
        );
    }
}

export default SocialMediaIcon;