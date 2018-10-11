import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="contact-agileinfo">
                        <div className="container">
                            <h2>Reach Us</h2>
                            <div className="col-md-4 contact-left-agile">
                                <div className="address-w3-agileits" id="address">
                                    <h4>Address</h4>
                                    <address>
                                        <ul>
                                            <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> Parma Via Modena</li>
                                            <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> Sant'Agata Bolognese</li>
                                            <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> BO, Italy</li>
                                        </ul>
                                    </address>
                                </div>
                                <div className="phone-agileits-w3layouts" id="phone">
                                    <h4>Phone</h4>
                                    <p><span className="glyphicon glyphicon-earphone" aria-hidden="true" /> +1 (734) 123-4567</p>
                                    <p><span className="glyphicon glyphicon-earphone" aria-hidden="true" /> +1 (739) 648-7114</p>
                                </div>
                                <div className="email">
                                    <h4>Email</h4>
                                    <p><span className="glyphicon glyphicon-envelope" aria-hidden="true" /> <a href="mailto:mail@example.com"> info@example.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-8 contact-right-w3">
                                <form action="#" method="post">
                                    <input type="text" className="text" name="Name" placeholder="Name" required />
                                    <input type="text" className="text" name="Email" placeholder="Email" required />
                                    <input type="text" className="text" name="Phone" placeholder="Phone" required />
                                    <input type="text" className="text" name="City" placeholder="City" required />
                                    <textarea name="Message" placeholder="Message" required defaultValue={""} />
                                    <input type="submit" className="more_btn" defaultValue="Send Message" />
                                </form>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/* Map-iFrame */}
                    <div className="map" id="map">
                        <div className="map-hover">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22702.22744502486!2d11.113366067229226!3d44.662878362361056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fc3eca9065c15%3A0x12ec8a03aadae866!2s40019+Sant'Agata+Bolognese+BO%2C+Italy!5e0!3m2!1sen!2sin!4v1451281303075" allowFullScreen />
                            <div className="map-hover-1" />
                        </div>
                    </div>
                    {/* //Map-iFrame */}
                </div>

            </div>
        );
    }
}

export default Contact;