import React from 'react';
import Projects from './pages/ProjectsPage';
import Certificates from './pages/CertificatesPage';
import CV from './pages/CVPage';
import Contacts from './pages/ContactsPage';
import Blog from './pages/BlogPage';
import Home from './pages/HomePage';

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
                            <Home/>
                        </Route>
                        <Route path="/achievements/projects">
                            <Projects/>
                        </Route>
                        <Route path="/achievements/certificates">
                            <Certificates/>
                        </Route>
                        <Route path="/achievements/cv">
                            <CV/>
                        </Route>
                        <Route path="/contacts">
                            <Contacts/>
                        </Route>
                        <Route path="/blog">
                            <Blog/>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }

}

