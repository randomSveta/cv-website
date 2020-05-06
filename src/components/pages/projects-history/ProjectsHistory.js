import React from 'react';
import Page from '../Page';
import { SECTIONS_PROJECTS_HISTORY } from '../../website-data/pages-and-sections/sections';

import "../../../styles/css/projects-history.css";

export default function ProjectsHistory(props) {

    return <Page page="Projects History" sections={SECTIONS_PROJECTS_HISTORY} />
}