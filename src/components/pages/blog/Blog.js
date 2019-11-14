import React from 'react';
import ArticlesDisplay from './ArticlesDisplay'

export default function Blog(props) {
    return (
        <React.Fragment>
            <ArticlesDisplay sectionUrl='/blog'/>
        </React.Fragment>
 
    );
}