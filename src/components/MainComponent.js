import React from 'react';
import HeroImage from './HeroImageSection';
import  NavBar from './NavBar';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeroImage />
                <NavBar />
            </React.Fragment>
        );
    }

}

