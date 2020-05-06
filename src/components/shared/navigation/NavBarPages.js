import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../website-data/pages-and-sections/pages';

export default function NavBarPageLinks(props) {

    const navigationItems = PAGES.filter(page => !page.isArticle && !page.isHistory).map(link => {
        return (
            <NavItem key={link.id} className="text-center p-0 ml-2 mr-1 my-1">
                <NavLink exact activeClassName='active-item' className="link-style nav-link-style underscore m-1 p-0 text-decoration-none d-inline-block" to={link.url}>
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

