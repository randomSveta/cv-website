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

//import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarHash from '../components/navigation/NavBarHash';
import NavBarPageLinks from '../components/navigation/NavBarPageLinks';

import { HASH_HOME, HASH_CERTIFICATES, HASH_PROJECTS } from './navigation/links/nav-links';

//const achievments = <NavBarAchievments />;
const navPages = <NavBarPageLinks />;

const routes = [
    {
        path: "/",
        exact: true,
        navbarDispaly: () =>
            <React.Fragment>
                <HeroImage />
                <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={HASH_HOME}/>}  />
            </React.Fragment>
    },
    {
        path: "/cv",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={HASH_HOME}/>}/>


    }
    ,
    {
        path: "/certificates",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={HASH_CERTIFICATES}/>}/>
    },
    {
        path: "/projects",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={HASH_PROJECTS}/>} />
    },
    {
        path: "/blog",
        navbarDispaly: () => <NavBar navigationPages={navPages} navigationHash={<NavBarHash links={HASH_CERTIFICATES}/>} />
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

