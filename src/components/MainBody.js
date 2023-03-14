import React from 'react'
import Navbar from './Navbar'
import '../CSS/MainBody.css'
import CoverPageLeft from './CoverPageLeft'
import CoverPageRight from './CoverPageRight'
import AboutMeSecondSection from './AboutmeSecondSection'
import Service from './Service'
import Resume from './Resume'
import Projects from './Projects'
import Contactme from './Contactme'
import Footer from './Footer'
import HireMe from './HireMe'

const MainBody = (props) => {

    const { education, projects } = props;
    return (
        <>
            <Navbar />
            <section className='MainbodyClass' id='Home'>
                <div className="firstSeciton">
                    <CoverPageLeft/>
                </div>
                <div className="secondSection">
                    <CoverPageRight />
                </div>
            </section>

            <section className="AboutMeSection" id='About'>
                <div className="headingContainer">
                    <p className='AboutMeHeading text-center'><span>About Me</span></p>
                    <h2 className='AboutMe text-center'>Know Me More</h2>
                </div>
                <div className="AboutSection">
                    <AboutMeSecondSection />
                </div>
            </section>
            <section className="serviceSection" id='WhatIDo'>
                <Service />
            </section>
            <section className="resumeSection" id='Resume'>
                <Resume education={education} />
            </section>
            <section className="projectSection" id='Projects'>
                <Projects Projects={projects} />
            </section>
            <section className="hireMeSection">
                <HireMe />
            </section>
            <section className="contactme" id='ContactMe'>
                <Contactme />
            </section>
            <section className="footer">
                <Footer />
            </section>


        </>
    )
}

export default MainBody