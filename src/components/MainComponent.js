import React from 'react';
import HeroImage from './HeroImageSection';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './SectionAbout';
import Skills from './SectionSkills';
import CurrentProject from './SectionCurrentProject';
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

