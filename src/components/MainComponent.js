import React from 'react';

import Home from './pages/home/Home';
import CV from './pages/cv/CV';
import Certificates from './pages/certificates/Certificates';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch location={this.props.location}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/cv">
                            <CV />
                        </Route>
                        <Route path="/certificates">
                            <Certificates />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }

}

