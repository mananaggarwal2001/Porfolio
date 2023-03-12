import React, { useState } from 'react'
import '../CSS/Navbar.css'
import ham from '../Images/ham.png'
import cross from '../Images/cross.png'
const Navbar = () => {

    const [flag, setFlag] = useState(true)
    const handleToggleButton = () => {
        document.getElementById('mainHamClass').classList.toggle('icon');
    }
    return (
        <div className=' parentContainerOfNavbar d-flex'>
            <div className=" NavbarContainer d-flex">
                <div className="NamePhoneNumber d-flex">

                    <p className=' nameClass text-uppercase'>Manan Aggarwal</p>
                    <span><i className='fa-solid fa-phone p-2'></i>(+91)-9319054970</span>
                </div>
                <div className="PhoneHamBurgerClass">

                    <div id='mainHamClass' class="hamclass" onClick={handleToggleButton}>
                        <div className="subHamclass">
                            <div id='bar1' className="bar"></div>
                            <div id='bar2' className="bar"></div>
                            <div id='bar3' className="bar"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="listNavItemsClass">
                <ul className='ListItemClass opacity-invisibleClass'>
                    <div className='listTopicItemsClass '>
                        <li> <a href=""> Home </a></li>
                        <li> <a href=""> About Me</a></li>
                        <li> <a href=""> What I Do ? </a></li>
                        <li> <a href=""> Resume </a></li>
                        <li> <a href=""> Projects </a></li>
                        <li> <a href=""> Contact Me </a></li>
                    </div>
                    <li className='iconClass'>
                        <a className="icon facebook" href="https://facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a className="icon instagram" href="/"><i className="fa-brands fa-instagram"></i></a>
                        <a className="icon linkedin" href="https://www.linkedin.com/in/manan-aggarwal-766603145" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a className="icon twitter" href="/"><i className="fa-brands fa-twitter" target='_blank' rel="noreferrer"></i></a>
                        <a className="icon github" href="/"><i className="fa-brands fa-github" target='_blank' rel="noreferrer"></i></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar