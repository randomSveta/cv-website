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

import Footer from './Footer';
import NavBar from './navigation/NavBar';
import HeroImage from '../components/pages/home/sections/hero-image/HeroImage';

import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarHash from '../components/navigation/NavBarHash';
import NavBarPageLinks from '../components/navigation/NavBarPageLinks';

const achievments = <NavBarAchievments />;
const hashLinks = <NavBarHash />;
const navPages = <NavBarPageLinks />;

const routes = [
    {
        path: "/",
        exact: true,
        navbarDispaly: () =>
            <React.Fragment>
                <HeroImage />
                <NavBar navigationAchievments={achievments} navigationHash={hashLinks} />
            </React.Fragment>
    },
    {
        path: "/cv",
        navbarDispaly: () => <NavBar navigationPages={navPages} />
    }
    ,
    {
        path: "/certificates",
        navbarDispaly: () => <NavBar navigationPages={navPages} />
    },
    {
        path: "/projects",
        navbarDispaly: () => <NavBar navigationPages={navPages} />
    },
    {
        path: "/blog",
        navbarDispaly: () => <NavBar navigationPages={navPages} />
    }
];

export default class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.navbarDispaly />}
                            />
                        ))}
                    </Switch>
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

                    <Footer />

                </Router>
            </React.Fragment>
        );
    }

}

