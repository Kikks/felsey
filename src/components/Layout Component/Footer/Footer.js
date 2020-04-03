import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../Logo/Logo';
import Icons from '../../UI/Icons/Icons';

const Footer = (props) => (
    <footer className = "footer">
        <div className = "footer__wrapper">
            <div className = "footer__social">
                <Icons icon = "facebook" className = "social__box" svgClass = "social__logo" />
                <Icons icon = "instagram" className = "social__box" svgClass = "social__logo"/>
                <Icons icon = "twitter" className = "social__box" svgClass = "social__logo"/>
            </div>
            
            <div className = "footer__content">
                <Link className = "footer__logo-link" to = "/" exact ><Logo className = "footer__logo" imgClassName = "footer__logo-img"/></Link>
                <p className = "footer__copyright">&copy; 2020 by Felsey Ventures. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;