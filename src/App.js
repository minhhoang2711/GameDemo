import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import Nav from './components/Nav';
import RouterURL from './router/RouterURL';
class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    
                    <Nav />

                    <RouterURL/>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
