import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function NavBarPageLinks(props) {

    return (
        <React.Fragment>
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/cv">CV</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/certificates">Certificates</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/blog">Blog</NavLink>
            </NavItem>
        </React.Fragment>

    );
}

