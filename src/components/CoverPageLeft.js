import React from 'react'
import '../CSS/CoverpageLeft.css'
import Typewriter from 'typewriter-effect'
const CoverPageLeft = () => {
    return (
        <div className='containerClass'>
            <h3 className='text-uppercase' data-aos='fade-left' >Hi, I'm a Freelancer</h3>

            <span className='text-uppercase typewriterClass'><Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 'natural',
                    strings: ['Manan', 'Developer', 'Designer', 'Creator']
                }}
            /> </span>
            <p data-aos='fade-right'>based in India,Noida.</p>
            <div className="buttonsContainer" data-aos='fade-right' data-aos-once="true">
                <a href="http://"><button className="btn">View My Work</button></a>
                <a className='linkClass' href="http://">Contact Me <i class="fa-regular fa-arrow-down-to-arc"></i></a>

            </div>
        </div>
    )
}


export default CoverPageLeft;