import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Nav extends Component {
render() {
return (
<div className="header">
    {/* Navbar */}
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a href="/">
                    <h1>Games <img src="templateHTML/images/c1.png" alt="" /> Zone</h1>
                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hover-effect"><NavLink activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }} to="/home">Home</NavLink></li>
                    <li className="hover-effect"><NavLink activeStyle={{
                        fontWeight: 'bold',
                        color: 'pink'
                    }} to="/about">About</NavLink></li>
                    <li className="hover-effect"><NavLink activeStyle={{
                        fontWeight: 'bold',
                        color: 'blue'
                    }} to="/game">Games</NavLink></li>
                    <li className="hover-effect"><NavLink activeStyle={{
                        fontWeight: 'bold',
                        color: 'orange'
                    }} to="/news">News</NavLink></li>
                    <li className="hover-effect"><NavLink activeStyle={{
                        fontWeight: 'bold',
                        color: 'yellow'
                    }} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    {/* //Navbar */}
    {/* Slider */}
    <div className="slider">
        <ul className="rslides" id="slider">
            <li>
                <img src="templateHTML/images/banner3.jpg" alt="" />
            </li>
            <li>
                <img src="templateHTML/images/banner2.jpg" alt="" />
            </li>
            <li>
                <img src="templateHTML/images/banner4.jpg" alt="" />
            </li>
        </ul>
    </div>
    {/* //Slider */}
</div>
);
}
}

export default Nav;