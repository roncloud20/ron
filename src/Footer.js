import React from "react";
import { NavLink } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function Footer(){
    return (
        <footer>
        <ul className="footer-links-main">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/cases'>Cases</NavLink></li>
            <li><NavLink to='/porfolio'>Porfolio</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/content'>Contact</NavLink></li>
        </ul>
        {/* <ul className="footer-links-cases">
            <li><p>Latest Cases </p></li>
            <li><a href="#">MALING SHAOLIN - WEB DEVELOPMENT</a></li>
            <li><a href="#">EXCELLENTO - WEB DEVELOPMENT, SEO</a></li>
            <li><a href="#">RONCLOUD - YOUTUBE CHANNEL</a></li>
            <li><a href="#">WELTEC - VIDEO PRODUCTION</a></li>
        </ul> */}
        <div className="footer-sm">
            <a href="https://web.facebook.com/olugbenga.raymond" target="_blank">
                <img src={images[`facebook.png`]} alt="facebook icon" />
            </a>
            <a href="#">
                <img src={images[`twitter.png`]} alt="twitter icon" />
            </a>
            <a href="#">
                <img src={images[`youtube.png`]} alt="youtube icon" />
            </a>
        </div>
    </footer>  
    );
}

export default Footer;