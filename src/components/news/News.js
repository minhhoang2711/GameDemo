import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
                <div className="events-w3layouts">
                    <h2>News</h2>
                    <a href="/game-detail"><div className="col-md-7 events-left-agile-agileits-w3layouts">
                        <div className="events-text-w3-agile events-text1">
                            <h4>June 20, 2017</h4>
                            <p>Phasellus faucibus semper eros, quis mauris </p>
                            <ul>
                                <li>by Admin</li>
                                <li><span className="glyphicon glyphicon-heart" aria-hidden="true" /> 10</li>
                            </ul>
                        </div>
                    </div></a>
                    <div className="col-md-5 events-right-agile">
                        <a href="/game-detail"><div className="events-right-top">
                            <div className="events-text-w3-agile events-text2">
                                <h4>July 20, 2017</h4>
                                <p>Aenean imperdiet volutpat tortor </p>
                                <ul>
                                    <li>by Admin</li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true" /> 20</li>
                                </ul>
                            </div>
                        </div></a>
                        <a href="/game-detail"><div className="events-right-bottom">
                            <div className="events-text-w3-agile events-text2">
                                <h4>Aug 20, 2017</h4>
                                <p>Fusce aliquam purus  consectetur</p>
                                <ul>
                                    <li>by Admin</li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true" /> 15</li>
                                </ul>
                            </div>
                        </div></a>
                        <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="events-section2-agileinfo">
                    <div className="container">
                        <div className="blog1-w3ls">
                            <div className="col-md-4 blog-image-w3l">
                                <a href="/game-detail"><img src="templateHTML/images/ng1.jpg" alt=" " /></a>
                            </div>
                            <div className="col-md-8 blog-text-w3ls">
                                <a href="/game-detail"><h4>Quisque in lectus erat</h4></a>
                                <div className="item_info">
                                    <ul>
                                        <li><a href="/"><i className="glyphicon glyphicon-user" />Admin</a></li>
                                        <li><i className="glyphicon glyphicon-calendar" />14.May.2017</li>
                                        <li><a href="/"><i className="glyphicon glyphicon-comment" />20 Comments</a></li>
                                        <li><a href="/"><i className="glyphicon glyphicon-heart" />300 Likes</a></li>
                                    </ul>
                                </div>
                                <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                                <a href="/game-detail" className="blog-read">Read More</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="blog2-w3ls">
                            <div className="col-md-4 blog-image-w3l">
                                <a href="/game-detail"><img src="templateHTML/images/ng2.jpg" alt=" " /></a>
                            </div>
                            <div className="col-md-8 blog-text-w3ls">
                                <a href="/game-detail"><h4>In finibus vel metus</h4></a>
                                <div className="item_info">
                                    <ul>
                                        <li><a href="/"><i className="glyphicon glyphicon-user" />Admin</a></li>
                                        <li><i className="glyphicon glyphicon-calendar" />17.Aug.2017</li>
                                        <li><a href="/"><i className="glyphicon glyphicon-comment" />20 Comments</a></li>
                                        <li><a href="/"><i className="glyphicon glyphicon-heart" />300 Likes</a></li>
                                    </ul>
                                </div>
                                <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                                <a href="/game-detail" className="blog-read">Read More</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="blog3-w3ls">
                            <div className="col-md-4 blog-image-w3l">
                                <a href="/game-detail"><img src="templateHTML/images/ng3.jpg" alt=" " /></a>
                            </div>
                            <div className="col-md-8 blog-text-w3ls">
                                <a href="/game-detail"><h4>Nam eget ligula eu</h4></a>
                                <div className="item_info">
                                    <ul>
                                        <li><a href="/"><i className="glyphicon glyphicon-user" />Admin</a></li>
                                        <li><i className="glyphicon glyphicon-calendar" />24.Aug.2015</li>
                                        <li><a href="/"><i className="glyphicon glyphicon-comment" />20 Comments</a></li>
                                        <li><a href="/"><i className="glyphicon glyphicon-heart" />300 Likes</a></li>
                                    </ul>
                                </div>
                                <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                                <a href="/game-detail" className="blog-read">Read More</a>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default News;