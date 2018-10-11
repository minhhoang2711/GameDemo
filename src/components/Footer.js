import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-left-w3">
                        <h4>Contact</h4>
                        <ul>
                            <li><span className="glyphicon glyphicon-envelope" aria-hidden="true" /></li>
                            <li><a href="mailto:example@mail.com"><h6>ex@mail.com</h6></a></li>
                        </ul>
                        <ul>
                            <li><span className="glyphicon glyphicon-earphone" aria-hidden="true" /></li>
                            <li><h6>+18045678834</h6></li>
                        </ul>
                        <ul>
                            <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /></li>
                            <li><h6>4th Avenue,London</h6></li>
                        </ul>
                        <ul>
                            <li><span className="glyphicon glyphicon-phone-alt" aria-hidden="true" /></li>
                            <li><h6>(0033)6544 5453 644</h6></li>
                        </ul>
                    </div>
                    <div className="col-md-5 footer-middle-w3">
                        <h4>Latest Games</h4>
                        <div className="col-md-3 img-w3-agile">
                            <a href="/game-detail"><img src="templateHTML/images/ng1.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile">
                            <a href="/game-detail"><img src="templateHTML/images/ng2.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile">
                            <a href="/game-detail"><img src="templateHTML/images/ng3.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile">
                            <a href="/game-detail"><img src="templateHTML/images/ng4.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile footer-middle-wthree">
                            <a href="/game-detail"><img src="templateHTML/images/ng5.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile footer-middle-wthree">
                            <a href="/game-detail"><img src="templateHTML/images/ng6.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile footer-middle-wthree">
                            <a href="/game-detail"><img src="templateHTML/images/ng7.jpg" alt=" " /></a>
                        </div>
                        <div className="col-md-3 img-w3-agile footer-middle-wthree">
                            <a href="/game-detail"><img src="templateHTML/images/ng8.jpg" alt=" " /></a>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="col-md-4 footer-right-w3">
                        <a href="index.html"><h4>Games <img src="templateHTML/images/f1.png" alt=" " /> Zone</h4></a>
                        <p>Donec lobortis diam eu auctor porta. Phasellus in elementum tortor, sit amet imperdiet urna pellentesque non risus porta.</p>
                        <p className="agileinfo">Suspendisse convallis malesuada libero, non rutrum arcu pellentesque lacinia.</p>
                    </div>
                    <div className="clearfix" />
                    <div className="copyright">
                        <p>© 2017 Games Zone. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="blank"> W3layouts </a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;