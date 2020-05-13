import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsHistoryLink(props) {
    return (<Link to={"/projects-history"} className="app-link-underscore text-decoration-none text-dark">Projects History</Link>);
}