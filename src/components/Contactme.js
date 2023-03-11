import React from 'react'
import '../CSS/Contactme.css'
const Contactme = () => {
    return (
        <div className='contactmeSection'>
            <div className="contactmeleft" data-aos='slide-up'>
                <div className="getintouch">
                    <h3>Let's Get in touch</h3>
                    <p>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                </div>

                <div className="livingin">
                    <p>Living In:</p>
                    <p>Palm Olympia Tower-10 Gaur City Noida</p>
                </div>
                <div className="Call">
                    <p>Call:</p>
                    <p>(+91) 9319054970</p>
                </div>
                <div className="iconSection">
                    <a className="navicon facebook" href="https://facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a className="navicon instagram" href="/"><i className="fa-brands fa-instagram"></i></a>
                    <a className="navicon linkedin" href="https://www.linkedin.com/in/manan-aggarwal-766603145" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="navicon twitter" href="/"><i className="fa-brands fa-twitter" target='_blank' rel="noreferrer"></i></a>
                    <a className="navicon github" href="/"><i className="fa-brands fa-github" target='_blank' rel="noreferrer"></i></a>
                </div>
            </div>
            <div className="contactmeright" data-aos='slide-up' data-aos-delay='500'>
                <h3>Estimate your Project?</h3>
                <form>
                    <div className="mb-5">
                        <label for="exampleInputEmail1" className="form-label">What is your name ?</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-5">
                        <label for="exampleInputPassword1" className="form-label">What is Your Email ?</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-5">
                        <label for="exampleInputPassword1" className="form-label">How Can I Help You ?</label>
                        <textarea type="email" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Send <i class="fas fa-arrow-right"></i> </button>
                </form>
            </div>
        </div>
    )
}

export default Contactme