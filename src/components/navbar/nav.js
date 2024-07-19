import React from 'react'
import pk from './R.png'
import './navbar.css'
import '../slidbar/sidebar.css'

export default function Navbar () {
  return (
        <>
            <div className="spotify-nav">
                <li className='img-text' > <img className='brand ' src={ pk } alt='/' /><span>Spotify</span></li>
                <li>Home</li>
                <li>About </li>
            </div>
          
            {/* <li>  <button className='btn'> <i class="fa-solid fa-right-from-bracket"></i>Sign Out</button></li>  */}
           
      </>
    )
}
