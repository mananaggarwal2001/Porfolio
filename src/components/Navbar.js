import React from 'react'
import '../CSS/Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className=" navbarSettings container-fluid">
                <a className="navbar-brand" href="#">MANAN AGGARWAL</a>
                <div className="buttonPhoneNumber">
                    <span className='PhoneClass'><i class="fa-solid fa-phone me-2"></i> (+91)-9319054970</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse manual-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 totallistitems">
                        <div className="listcontainer">
                            <li className="nav-item listitem">
                                <a className="nav-link mylinksClass" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item listitem">
                                <a className="nav-link mylinksClass" href="#">About Me</a>
                            </li>
                            <li className="nav-item listitem">
                                <a className="nav-link mylinksClass" href="#">What I Do</a>
                            </li>
                            <li className="nav-item listitem">
                                <a className="nav-link mylinksClass" href="#">Resume</a>
                            </li>
                            <li className="nav-item listitem">
                                <a className="nav-link mylinksClass" href="#">Contact Me</a>
                            </li>
                        </div>
                        <div className="social-icons">
                            <li className="nav-item listitem ">
                                <a className="nav-link icon1" href="https://facebook.com" target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                            </li>
                            <li className="nav-item listitem ">
                                <a className="nav-link icon2" href="https://www.instagram.com/codingwithmanan/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li className="nav-item listitem ">
                                <a className="nav-link icon3" href="https://www.linkedin.com/in/manan-aggarwal-766603145" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li className="nav-item listitem ">
                                <a className="nav-link icon4" href="https://twitter.com/home" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter" ></i></a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar