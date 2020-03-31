import React from 'react';
//import Breadcrumbs from './navigation/Breadcrumbs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Footer from './footer/Footer';
import NavBar from './navigation/NavBar';
import HeroImage from '../components/pages/home/sections/hero-image/HeroImage';

//import NavBarAchievments from '../components/navigation/NavBarAchievments';
import NavBarSections from '../components/navigation/NavBarSections';
import NavBarPages from '../components/navigation/NavBarPages';

import { PAGES } from './navigation/pages-and-sections/pages';

//const achievments = <NavBarAchievments />;
const navPages = <NavBarPages />;

const routes = [];

PAGES.forEach((page, index) => {
    let route = {
        path: page.url,
        exact: (page.article ? false : true)
    };

    //const breadcrumbsArticle = <Breadcrumbs article={page.article} secondStep={page.page} secondStepUrl={page.pageUrl} thirdStep={page.name} />;
    //const breadcrumbsPages = <Breadcrumbs article={page.article} secondStep={page.name} />;

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
                    {/*{page.article ? breadcrumbsArticle : breadcrumbsPages}*/}
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
                    <div className="content">
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

