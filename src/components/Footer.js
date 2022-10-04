import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h1>Sal<Span className='primary'>Man</Span></h1>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='col'>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>
                </span>
            </div>
            <div className='col'>
                <h5>Developers</h5>
                <span className='col'>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer