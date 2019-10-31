import React from 'react';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBarHash(props) {
    console.log(props);

const hashLinksList = props.links;
    const hashLinks = hashLinksList.map(link => {
        return (
            <NavItem key={link.id} className="navbar-li-hash">
                <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style underscore nav-link-style' to={link.hashUrl}
                >{link.name}</NavHashLink>
            </NavItem>
        );
    });


    return (
        <React.Fragment>
            <ul id="hash-links-list">
                {hashLinks}
            </ul>
        </React.Fragment>
    );
}

