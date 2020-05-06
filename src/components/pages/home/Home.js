import React from 'react';
import Page from '../Page';
import { SECTIONS_HOME } from '../../website-data/pages-and-sections/sections';

import "../../../styles/css/home.css";

export default function Home(props) {
    return <Page page="home" sections={SECTIONS_HOME} />
}