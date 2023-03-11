import React from 'react'
import '../CSS/HireMe.css'
const HireMe = () => {
    return (
        <div className='HireMeClass'>
            <div className="HireMeParagraphButton">
                <p data-aos='fade-down'>Interested in working with me?</p>
                <button data-aos='fade-up' className='btn btn-primary'>Hire Me !</button>
            </div>
        </div>
    )
}

export default HireMe