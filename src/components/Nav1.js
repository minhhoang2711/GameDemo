import React, { Component } from 'react';

class Nav1 extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <div className="sub-banner">
                    {/* Navbar */}
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href="index.html"><h1>Games <img src="images/c1.png" alt=" " /> Zone</h1></a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="hover-effect"><a href="index.html">Home</a></li>
                                    <li className="hover-effect active"><a href="about.html">About</a></li>
                                    <li className="hover-effect"><a href="games.html">Games</a></li>
                                    <li className="hover-effect"><a href="news.html">News</a></li>
                                    <li className="hover-effect"><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* banner */}

            </div>
        );
    }
}

export default Nav1;