import React from 'react'
import photo from '../Images/Manan.jpg'
import '../CSS/CoverPageRight.css'
const CoverPageRight = () => {
    return (
        <div className='imageClass' data-aos='fade-right'>
            <img src={photo} alt="" />
        </div>
    )
}

export default CoverPageRight