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
import NavBarHash from '../components/navigation/NavBarHash';
import NavBarPageLinks from '../components/navigation/NavBarPageLinks';

import { SECTIONS_HOME, SECTIONS_CERTIFICATES, SECTIONS_PORTFOLIO } from './navigation/links/nav-links';

//const achievments = <NavBarAchievments />;
const navPages = <NavBarPageLinks />;

const routes = [
    {
        path: "/",
        exact: true,
        navbarDispaly: () =>
            <React.Fragment>
                <HeroImage />
                <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={SECTIONS_HOME}/>}  />
            </React.Fragment>
    },
    {
        path: "/certificates",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={SECTIONS_CERTIFICATES}/>}/>
    },
    {
        path: "/portfolio",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={SECTIONS_PORTFOLIO}/>} />
    },
    {
        path: "/blog",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={SECTIONS_CERTIFICATES}/>} />
    }
];

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

