import React from 'react'
import '../CSS/AboutMeSecondSection.css'
const AboutMeSecondSection = () => {
  return (
    <>
      <div className='AboutMeSectionClass'>
        <h3 className='headingClass text-center m-3' data-aos='fade-down'>Hi, I'm <span className='AboutNameClass'>Manan Aggarwal</span></h3>
        <p data-aos='fade-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi cupiditate eligendi quisquam ducimus atque! Vero incidunt fugiat eius ullam ipsa architecto! Repellendus ut qui officiis animi ex doloribus velit excepturi numquam, iure aperiam culpa eaque, aut temporibus dicta tempora atque! Quidem distinctio consequatur deleniti in adipisci! Corporis iure laboriosam nemo facere? Inventore id, aut, provident at dignissimos veniam iure laborum nam odit blanditiis exercitationem vel accusamus sint dicta? Eius ab nihil delectus optio voluptate eveniet accusamus cumque, hic, tenetur nulla culpa voluptates eum commodi ratione laboriosam nesciunt iusto perferendis explicabo possimus! Doloribus, aperiam veritatis? Odit sunt officiis earum voluptate?</p>
      </div>
      <div className="AboutMedetailsClass" data-aos='fade-up'>
        <div className="detailbox">
          <p className='askingDetailsClass'>Name:</p>
          <p>Manan Aggarwal</p>
        </div>
        <div className="detailbox">
          <p className='askingDetailsClass'>Email:</p>
          <p> <a className='mailLinkClass' href="mailto: mananaggarwal2001@gmail.com" target="_blank">  mananaggarwal2001@gmail.com</a></p>
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
