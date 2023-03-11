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


    const {education, projects} = props;
    return (
        <>
            <Navbar />
            <div className='MainbodyClass'>
                <div className="firstSeciton">
                    <CoverPageLeft />
                </div>
                <div className="secondSection">
                    <CoverPageRight />
                </div>
            </div>
            <div className="AboutMeSection">
                <div className="headingContainer">
                    <p className='AboutMeHeading text-center'><span>About Me</span></p>
                    <h2 className='AboutMe text-center'>Know Me More</h2>
                </div>
                <div className="AboutSection">
                    <AboutMeSecondSection />
                </div>
            </div>
            <div className="serviceSection">
                <Service />
            </div>
            <div className="resumeSection">
                <Resume education={education} />
            </div>
            <div className="projectSection">
                <Projects Projects={projects} />
            </div>
            <div className="hireMeSection">
                <HireMe/>
            </div>
            <div className="contactme">
                <Contactme/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}

export default MainBody