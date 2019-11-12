import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { PAGES } from './pages-and-sections/pages';

export default function NavBarPageLinks(props) {

    const navigationItems = PAGES.filter(page => !page.article).map(link => {
        return (
            <NavItem key={link.id} className="text-center">
                <NavLink exact activeClassName='active-item' className="link-style nav-link-style underscore m-1 p-1 text-decoration-none d-inline-block" to={link.url}>
                    {link.name}
                </NavLink>
            </NavItem>
        );

    });
    return (
        <React.Fragment>
            {navigationItems}
        </React.Fragment>

    );
}

