import React, { useState } from 'react'
import '../CSS/Navbar.css'
const Navbar = () => {
    const handleToggleButton = () => {
        document.getElementById('mainHamClass').classList.toggle('icon');
        document.getElementById('ListItemId').classList.toggle('opacity-invisibleClass')
        document.getElementById('listItemIdList').classList.toggle('transformClass')
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
                <ul id='ListItemId' className='ListItemClass opacity-invisibleClass'>
                    <div id='listItemIdList' className='listTopicItemsClass '>
                        <li> <a href=""> Home </a></li>
                        <li> <a href=""> About Me</a></li>
                        <li> <a href=""> What I Do ? </a></li>
                        <li> <a href=""> Resume </a></li>
                        <li> <a href=""> Projects </a></li>
                        <li> <a href=""> Contact Me </a></li>
                    </div>
                    <div className="iconDivClass d-flex">


                        <li>
                            <a className="icon facebook me-3" href="https://facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li><a className="icon instagram me-3" href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a className="icon linkedin me-3" href="https://www.linkedin.com/in/manan-aggarwal-766603145" target='_blank' rel="noreferrer me-3"><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li><a className="icon twitter me-3" href="/"><i className="fa-brands fa-twitter" target='_blank' rel="noreferrer"></i></a>
                        </li>
                        <li><a className="icon github" href="/"><i className="fa-brands fa-github" target='_blank' rel="noreferrer"></i></a>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Navbar