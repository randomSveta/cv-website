import React from 'react';
import Page from '../Page';
import { SECTIONS_BLOG } from '../../website-data/pages-and-sections/sections';

import "../../../styles/css/blog.css";

export default function Blog(props) {
    return <Page page="blog" sections={SECTIONS_BLOG} />
}