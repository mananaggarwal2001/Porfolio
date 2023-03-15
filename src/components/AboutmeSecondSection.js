import React from 'react'
import '../CSS/AboutMeSecondSection.css'
const AboutMeSecondSection = () => {
  return (
    <>
      <div className='AboutMeSectionClass'>
        <h3 className='headingClass text-center m-3' data-aos='fade-down'>Hi, I'm <span className='AboutNameClass'>Manan Aggarwal</span></h3>
        <p data-aos='fade-left'>I am Manan Aggarwal. I am very passionate Student about the computers and always eager to learn more about the computers. I have done my schooling from the <strong>Universal Public School.</strong>. I have Secured <strong>81.4%</strong> in class 12<sup>th</sup> and <strong>66%</strong> in class 10<sup>th</sup>. My hobbies are playing computer games, reading the books, video editing, marketing. In sports I love to play basketball as this is my favourite game of all times. I also love to play cricket a lot. During my childhood in early morning I and my friends go to the commonwealth games village to play cricket. Earlier I live in <strong>Pandav Nagar</strong>. But recently I shifted to noida in gaur city and I live in <strong>Palm Olympia Society</strong>.</p>
      </div>
      <div className="AboutMedetailsClass" data-aos='fade-up'>
        <div className="detailbox">
          <p className='askingDetailsClass'>Name:</p>
          <p>Manan Aggarwal</p>
        </div>
        <div className="detailbox">
          <p className='askingDetailsClass'>Email:</p>
          <p> <a className='mailLinkClass' href="mailto: mananaggarwal2001@gmail.com"  target="_blank" without rel="noreferrer">  mananaggarwal2001@gmail.com</a></p>
        </div>
        <div className="detailbox">
          <p className='askingDetailsClass'>Date of Birth</p>
          <p>20 May, 2001</p>
        </div>
        <div className="detailbox">
          <p className='askingDetailsClass'>From:</p>
          <p>Noida, India.</p>
        </div>
      </div>
    </>
  )
}

export default AboutMeSecondSection
