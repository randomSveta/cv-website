import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Footer from './shared/footer/Footer';
import NavBar from './shared/navigation/NavBar';
import HeroImage from './pages/home/sections/hero-image/HeroImage';

//import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarSections from './shared/navigation/NavBarSections';
import NavBarPages from './shared/navigation/NavBarPages';

import { PAGES } from './website-data/pages-and-sections/pages';

//const achievments = <NavBarAchievments />;
const navPages = <NavBarPages />;

const routes = [];

PAGES.forEach((page, index) => {
    let route = {
        path: page.url,
        exact: (page.article ? false : true)
    };

    if (index === 0) {
        route.navigation = () =>
            <React.Fragment>
                <HeroImage />
                <NavBar navigationPages={navPages} navigationSections={<NavBarSections sections={page.sections} />} />
            </React.Fragment>
    }
    else {
        route.navigation = () => {
            return (
                <React.Fragment>
                    <NavBar navigationPages={navPages} navigationSections={<NavBarSections sections={page.sections} />} />
                </React.Fragment>
            );
        }
    }
    routes.push(route);
});

const pages = PAGES.map((page) => {
    return (
        <Route key={page.id} exact={page.exact} path={page.url}>
            {page.jsx}
        </Route>
    );
});

export default class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="app-content">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.navigation />}
                                />
                            ))}
                        </Switch>
                        <Switch location={this.props.location}>
                            {pages}
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </React.Fragment>
        );
    }

}

