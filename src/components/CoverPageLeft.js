import React from 'react'
import '../CSS/CoverpageLeft.css'
import Typewriter from 'typewriter-effect'
const CoverPageLeft = () => {
    return (
        <div className='containerClass'>
            <h3 className='text-uppercase'>Hi, I'm a Freelancer</h3>
            <span className='text-uppercase typewriterClass'><Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 'natural',
                    strings: ['Manan', 'Developer', 'Designer', 'Creator']
                }}
            /> </span>
            <p>based in India,Noida.</p>
            <div className="buttonsContainer">
                <a href="http://"><button className="btn">View My Work</button></a>
                <a className='linkClass' href="http://">Contact Me <i class="fa-regular fa-arrow-down-to-arc"></i></a>

            </div>
        </div>
    )
}

export default CoverPageLeft