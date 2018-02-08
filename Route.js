import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
// import Home from './components/home';
import About from './components/about';
// import Navbar from './components/navbar';
import SignUp from './components/signup';
import Login from './components/login';
import Chat from './components/chat';
import history from './history';

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                 {/* <Route exact path="/" component={Home} /> */}
                   {/* <Route exact path="/" component={Navbar} /> */}
                   {<Route path="/about" component={About} /> }
                    <Route  exact path="/" component={Login  } />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/chat" component={Chat} />
                </div>
            </Router>
        )
    }
}

export default Routers;