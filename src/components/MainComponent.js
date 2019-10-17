import React from 'react';
import HeroImage from './HeroImageSection';
import NavBar from './NavBar';
import Footer from './Footer';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="content-area">
                    <HeroImage />
                    <NavBar />
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}

