import React from 'react';
import HeroImage from './sections/hero-image/HeroImage';
import NavBar from '../../navigation/NavBar';
import About from './sections/about/About';
import CurrentProjects from './sections/current-projects/CurrentProjects';
import Skills from './sections/skills/Skills';

import ParallaxImage from '../../ParallaxBackground';
import Footer from '../../Footer';
import NavBarAchievments from '../../navigation/NavBarAchievments';
import NavBarHomeHash from '../../navigation/NevBarHomeHash';

export default function Home(props){
   
        const achievments = <NavBarAchievments/>;
        const hashLinks = <NavBarHomeHash/>;
        return (

            <div className="container-page">
                <HeroImage />
                <NavBar navigationAchievments={achievments} navigationHash={hashLinks}/>
                <div className="container-content">
                    <About />
                    <ParallaxImage classProp="parallax-about" />
                    <Skills />                    
                    <ParallaxImage classProp="parallax-about" />
                    <CurrentProjects />
                </div>
                <Footer />
            </div>

        );
    }


