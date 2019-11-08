import React from 'react';
import { UncontrolledCollapse, Button, Nav, UncontrolledTooltip } from 'reactstrap';

import {
    NavItem
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function NavBarHash(props) {
    const hashLinksList = props.links;
    const hashLinks = hashLinksList.map(link => {
        return (
            <NavItem key={link.id} className="navbar-li-hash">
                <NavHashLink smooth /*activeClassName= 'active-hash-item'*/ className='link-style-hash m-1 p-1 text-decoration-none' to={link.hashUrl}
                >{link.name}</NavHashLink>
            </NavItem>
        );
    });


    return (
        <div className="d-flex flex-md-row-reverse flex-column justify-content-center align-items-center">

            <Button color="secondary" id="hash-list-toggler"><FontAwesomeIcon icon={faHashtag} className="active-item" /></Button>
            <UncontrolledTooltip placement="left" target="hash-list-toggler">
                Sections navigation
            </UncontrolledTooltip>
            <UncontrolledCollapse toggler="#hash-list-toggler">
                <Nav>
                    {hashLinks}

                </Nav>
            </UncontrolledCollapse>
        </div>

    );
}

