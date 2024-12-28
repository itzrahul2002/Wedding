import React, {useEffect} from 'react'
import './main.scss'
import img1 from '../../gallery/1.jpg'
import img2 from '../../gallery/2.jpg'
import img3 from '../../gallery/3.jpg'
import img4 from '../../gallery/4.jpg'
import img5 from '../../gallery/5.jpg'
import img6 from '../../gallery/11.jpg'
import img7 from '../../gallery/7.jpg'
import img8 from '../../gallery/8.jpg'
import img9 from '../../gallery/12.jpg'
import {HiOutlineLocationMarker,HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const data =[
    {
        id:1,
        imgSrc:img1,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Mumbai',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'France',
        location:'Paris',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    },
    {
        id:9,
        imgSrc:img9,
        destTitle:'Rajasthan',
        location:'India',
        grade:'CULTURAL',
        fees:'$459',
        description:'The epic of cultural, and indian wedding best & Royal Wedding This place is best For Tradinational wedding.', 
    }
]
const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

  return (
    <>
        <section className='main container section'>

            <div className="sectitle">
                <h3 data-aos="fade-right" className="title">
                    Most Booked Destination
                </h3>
            </div>


            <div className="secontent grid">
                {
                    data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singledestination">

                                <div className="imagediv">
                                    <img src={imgSrc} alt="" />
                                </div>

                                <div className="cardinfo">
                                    <h4 className='desttile'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon1'/>
                                        <span className='name'>{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small> +1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon1'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </section>
    </>
  )
}

export default Main