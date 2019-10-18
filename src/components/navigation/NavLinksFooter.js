import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks(props) {

  return (
    <ul>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/achievements/certificates">Certificates</Link>
      </li>
      <li>
        <Link to="/achievements/cv">CV</Link>
      </li>
      <li>
        <Link to="/achievements/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );
}

