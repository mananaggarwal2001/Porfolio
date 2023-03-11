import '../CSS/Resume.css'
import React from 'react'
import Progress from './Progress';

const Resume = (props) => {
    const { education } = props;
    return (
        <>
            <div className='ResumeClass'>
                <p className='text-center'> <span className='ResumeHeadingClass'>Resume</span> </p>
                <h3 className='text-center'> <span className='ResumeTopicClass'>A Summary of my Resume</span> </h3>
                <div className="educationAndExperience">
                    <div className="myEducation" data-aos='slide-up'>
                        <h3 className='headingClassOfCard'>My Education</h3>
                        <div className="card" >


                            {education.map((element) => {
                                return <div className="card-body resumeBody">
                                    <h5 className="card-title mytitle">{element.title}</h5>
                                    <h6 className="card-subtitle mb-2 subtitleClass">{element.subtitle}</h6>
                                    <p className="card-text text-muted">{element.description}</p>
                                    <hr />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="MyExperience" data-aos='slide-up' data-aos-delay="500">
                        <h3 className='headingClassOfCard'>My Experience</h3>
                        <div className="card" >
                            <div className="card-body resumeBody">
                                <h5 className="card-title mytitle">Card title</h5>
                                <h6 className="card-subtitle mb-2 subtitleClass">Card subtitle</h6>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr />
                            </div>
                            <div className="card-body resumeBody">
                                <h5 className="card-title mytitle">Card title</h5>
                                <h6 className="card-subtitle mb-2 subtitleClass">Card subtitle</h6>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr />
                            </div>
                            <div className="card-body resumeBody">
                                <h5 className="card-title mytitle">Card title</h5>
                                <h6 className="card-subtitle mb-2 subtitleClass">Card subtitle</h6>
                                <p className=" card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h3 className='headingClassOfCard text-center' data-aos='fade-up'>My Skills</h3>




                    <div className="skillSets d-flex">

                        <div className="skillSetOne" data-aos='slide-up'>
                            <Progress name='C/C++' percentage="40%"/>
                            <Progress name='HTML' percentage="50%"/>
                            <Progress name='Java' percentage="40%"/>
                            <Progress name='Boostrap' percentage="80%"/>
                        </div>

                        <div className="skillsSetTwo" data-aos='slide-up' data-aos-delay='300'>
                            <Progress name="Javascript" percentage="60%"/>
                            <Progress name="CSS" percentage="80%"/>
                            <Progress name="React" percentage="90%"/>
                            <Progress name="Python" percentage="30%"/>
                        </div>
                    </div>

                    <p className="CVParagraphTag" data-aos='slide-up'><a className='CVDownloadClass' href="http://">Download CV</a></p>
                </div>
            </div>
        </>
    )
}

export default Resume