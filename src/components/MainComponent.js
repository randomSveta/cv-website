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

import { Row, Col } from 'reactstrap';
import Footer from './Footer';
import NavBar from './navigation/NavBar';
import HeroImage from '../components/pages/home/sections/hero-image/HeroImage';

import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarHomeHash from '../components/navigation/NavBarHomeHash';
import NavBarPageLinks from '../components/navigation/NavBarPageLinks';

const achievments = <NavBarAchievments />;
const hashLinks = <NavBarHomeHash />;
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
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
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
                    <Row>
                        <Col xs="12">
                            <Footer />
                        </Col>
                    </Row>
                </Router>
            </React.Fragment>
        );
    }

}

