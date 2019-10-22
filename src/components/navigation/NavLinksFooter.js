import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks(props) {

  return (
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/cv">CV</Link>
      </li>
      <li>
      <Link to="/certificates">Certificates</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  );
}

