import React from 'react';
import Home from './pages/home/Home';
import Certificates from './pages/certificates/Certificates';
import Portfolio from './pages/portfolio/Portfolio';
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

//import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarSections from '../components/navigation/NavBarSections';
import NavBarPages from '../components/navigation/NavBarPages';

import { LINKS } from './navigation/links/nav-links';

//const achievments = <NavBarAchievments />;
const navPages = <NavBarPages />;



const routes = [];

LINKS.forEach((link, index) => {
    let route = {};
    if (index === 0) {
        route =
            {
                path: link.url,
                exact: true,
                navbarDispaly: () =>
                    <React.Fragment>
                        <HeroImage />
                        <NavBar navigationPages={navPages} navigationSections={<NavBarSections links={link.sections} />} />
                    </React.Fragment>
            }
    }
    else {
        route = {
            path: link.url,
            navbarDispaly: () => <NavBar navigationPages={navPages} navigationSections={<NavBarSections links={link.sections} />} />
        }

    }
    routes.push(route);
});

export default class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Router basename={process.env.PUBLIC_URL}>
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
                        <Route path="/certificates">
                            <Certificates />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
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

