import React from 'react';
import Breadcrumbs from '../../navigation/Breadcrumbs';
import ArticlesDisplay from './ArticlesDisplay'

export default function Blog(props) {
    return (
        <React.Fragment>
            <Breadcrumbs page="Blog"/>
            <ArticlesDisplay/>
        </React.Fragment>
 
    );
}