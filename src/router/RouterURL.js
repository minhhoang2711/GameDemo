import React, { Component } from 'react';
import {Route } from "react-router-dom";
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Game from '../components/game/Game';
import News from '../components/news/News';
import Single from '../components/gamedetail/Single';

class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/contact" component={Contact} />        
                    <Route exact path="/game-detail/:slug.:id.html" component={Single}/>
                </div>
        );
    }
}

export default RouterURL;