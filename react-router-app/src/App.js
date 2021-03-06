import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Navigation from "./components/NavigationPage";
import Error from "./components/Error";
import PrivateRouter from "./PrivateRoute";
import Posts from "./components/PostsPage";
import LoginPage from "./components/LoginPage";
import Logout from "./components/LogoutPage";

class App extends Component {
    render() {
        console.log("app called!");
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navigation/>
                    <Switch>
                        <Route path="/" exact={true} component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                        <PrivateRouter path="/posts/:postId" component={Posts} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/logout" component={Logout} />
                        <Route component={Error} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
