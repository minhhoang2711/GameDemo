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
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/game" component={Game}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contact" component={Contact} />        
                    <Route path="/game-detail/" component={Single}/>
                </div>
        );
    }
}

export default RouterURL;