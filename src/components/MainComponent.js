import React from 'react';
import HeroImage from './sections/HeroImageSection';
import NavBar from './navigation/NavBar';
import Footer from './Footer';
import About from './sections/SectionAbout';
import Skills from './sections/SectionSkills';
import CurrentProject from './sections/SectionCurrentProject';
import ParallaxImage from './ParallaxBackground';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="content-area">
                    <HeroImage />
                    <NavBar />
                    <About />
                    <ParallaxImage classProp="parallax-about" />
                    <CurrentProject />
                    <ParallaxImage classProp="parallax-about" />
                    <Skills />
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}

