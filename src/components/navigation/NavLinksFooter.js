import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './links/nav-links';

export default function NavLinks(props) {

  const footerNavLinks = LINKS.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} className='link-style m-3 underscore'>{link.name}</Link>
      </li>
    );
  });
  return (
    <ul id="nav-links-footer" className="d-flex flex-row list-unstyled justify-content-center align-items-center m-0 p-0">
      {footerNavLinks}
    </ul>
  );
}

