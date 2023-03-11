import React from 'react'
import '../CSS/footer.css'
const Footer = () => {
    const presentDate = new Date().getFullYear();
    return (
        <div className='FooterSection'>
            <p>Copyright &copy; {presentDate} <span className='NameSpanClass'> Manan Aggarwal </span> . All Rights Reserved.</p>
            <p>Designed By <span className='NameSpanClass'> Manan Aggarwal </span></p>
        </div>
    )
}

export default Footer;