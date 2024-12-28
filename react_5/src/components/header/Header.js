import React, { Component, useState } from 'react'
import './header.scss'
import {MdOutlineTravelExplore}from 'react-icons/md'
import {AiFillCloseCircle}from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Header = () => {
    const [active, setActive]=useState('navbar')

    const showNav =()=>
    {
        setActive('navbar activenavbar')
    }

    const removeNavbar =()=>
    {
        setActive('navbar')
    }
  return (
    <>
    <section className='navbarsection'>
        <header className="header flex">
            <div className="logodiv">
                <a href="/home" className='logo flex'>
                    <h1><MdOutlineTravelExplore className="icon"/> Rahulthakur</h1>
                </a>
            </div>

            {/* <div className="navbar"> */}
            <div className={active}>
                <ul className="navlists flex">
                    <li className="navitem">
                        <a href="/home" className='navlink'>Home</a>
                    </li>

                    <li className="navitem">
                        <a href="#" className='navlink'>Packages</a>
                    </li>

                    <li className="navitem">
                        <a href="#" className='navlink'>Services</a>
                    </li>

                    <li className="navitem">
                        <a href="/about" className='navlink'>About</a>
                    </li>

                    <li className="navitem">
                        <a href="#" className='navlink'>Pages</a>
                    </li>

                    <li className="navitem">
                        <a href="/ocasion" className='navlink'>Occasion</a>
                    </li>

                    <li className="navitem">
                        <a href="/contact" className='navlink'>Contact</a>
                    </li>

                    <button className="btn">
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={removeNavbar} className="closenavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="tooglenavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
 </>
  )
}

export default Header
