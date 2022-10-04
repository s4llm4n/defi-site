import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <img src={Crypto} alt='' />
            </div>

            {/* right */}
            <div className='right'>
                <h2>Earn passive income with Crypto</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets. simply hpold on to it</p>
            </div>
            <div className='input-container'>
                <input type='email' placeholder='Enter your Email' />
                <button className='btn'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Signup