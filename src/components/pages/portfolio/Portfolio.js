import React from 'react';
import { SECTIONS_PORTFOLIO } from '../../website-data/pages-and-sections/sections'
import Page from '../Page';

import "../../../styles/css/portfolio.css"


export default function Portfolio(props) {
    return <Page page="portfolio" sections={SECTIONS_PORTFOLIO} />
}