import React from 'react';
import HeroImage from '../sections/HeroImageSection';
import NavBar from '../navigation/NavBar';
import About from '../sections/SectionAbout';
import Skills from '../sections/SectionSkills';
import CurrentProject from '../sections/SectionCurrentProject';
import ParallaxImage from '../ParallaxBackground';
import Footer from '../Footer';
import SendEmail from '../SendEmailForm';
import NavBarAchievments from '../navigation/NavBarAchievments';
import NavBarHomeHash from '../navigation/NevBarHomeHash';

export default function Home(props){
   
        const achievments = <NavBarAchievments/>;
        const hashLinks = <NavBarHomeHash/>;
        return (

            <div className="container-page">
                <HeroImage />
                <NavBar navigationAchievments={achievments} navigationHash={hashLinks}/>
                <div className="container-content">
                    <About />
                    <SendEmail/>
                    <ParallaxImage classProp="parallax-about" />
                    <Skills />                    
                    <ParallaxImage classProp="parallax-about" />
                    <CurrentProject />
                </div>
                <Footer />
            </div>

        );
    }


