import React, { useEffect } from 'react'
import './footer.scss'
import video2 from '../../../src/gallery/video(1).mp4' 
import { FiChevronLeft, FiChevronRight, FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <>
      <section className='footer'>
        <div className='videodiv'>
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="seccontent container">
          <div className="contactdiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Works With us</h2>
            </div>

            <div className="inputdiv flex">
              <input type="text" placeholder='Enter Email Address'/>
              <button data-aos="fade-up" className='btn flex'>SEND<FiSend className="icon"/></button>
            </div>

          </div>

            <div className="footercard flex">
              <div className='footerintro flex'>
                 <div className="logdiv">
                 <a href="#" className='logo flex'>
                    <MdOutlineTravelExplore className='icon'/>
                      Rahul
                  </a>
                 </div>

                 <div data-aos="fade-up" className="footerparagraph">
                      Lorem ipsum dolor, sit amet consectetur adipisicing 
                      elit. Recusandae id praesentium, repellendus tempora 
                      pariatur eius incidunt commodi iste, quis omnis quo 
                      eligendi laudantium? Laudantium dicta mollitia totam
                      sapiente voluptate beatae?
                 </div>

                  <div data-aos="fade-up" className="footersocails">
                      <AiOutlineTwitter className='icon'/>
                      <AiFillYoutube className='icon'/>
                      <AiFillInstagram className='icon'/>
                      <BsLinkedin className='icon'/>
                  </div>
              </div>

                <div className="footerlinks grid">
                    {/* First row */}
                  <div data-aos="fade-up" data-aos-duration="3000"  className="linkgroup">
                    <span className='grouptitle'>
                        OUR COMPANY
                    </span>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Services
                    </li>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Insurance
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Agency
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Destination
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Payment
                    </li>
                  </div>

                  {/* second row */}
                  <div data-aos="fade-up" data-aos-duration="4000" className="linkgroup">
                    <span className='grouptitle'>
                        PARTNERS
                    </span>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Bookings
                    </li>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Faclities
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        HostelWorld
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Foods
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Managements
                    </li>
                  </div>

                  {/* third row */}
                  <div data-aos="fade-up" data-aos-duration="5000" className="linkgroup">
                    <span className='grouptitle'>
                        LAST MINUTE
                    </span>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        India
                    </li>

                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        America
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        London
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Japan
                    </li>
                    
                    <li className="footerlist flex">
                        <FiChevronRight  className='icon'/>
                        Bihar
                    </li>
                  </div>
                </div>

                <div className="footerdiv flex">
                  <small>BEST WEBSTIE</small>
                  <small>COPYRIGTHS REVERVED - RAHUL TAHKUR 2023</small>
                </div>

            </div>
        </div> 
      </section>
    </>
  )
}

export default Footer