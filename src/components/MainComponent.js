import React from 'react';
import HeroImage from './HeroImageSection';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './SectionAbout';
import Skills from './SectionSkills';
import CurrentProject from './SectionCurrentProject';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content-area">
                    <HeroImage />
                    <NavBar />
                    <About/>
                    <CurrentProject/>
                    <Skills/>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}

