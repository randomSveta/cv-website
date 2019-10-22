import React from 'react';
import Footer from '../Footer';
import NavBar from '../navigation/NavBar';
import NavBarPageLinks from '../navigation/NavBarPageLinks';
import Breadcrumbs from '../navigation/Breadcrumbs';

export default function Projects(props) {
    const navPages = <NavBarPageLinks />
    return (
        <React.Fragment>
            <NavBar navigationPages={navPages} />
            <Breadcrumbs page="Projects" />
            <Footer />
        </React.Fragment>

    );
}