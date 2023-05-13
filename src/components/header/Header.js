import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/me.jpg"
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
      <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Shahadat Hussian</h1>
          <h5 className="text-ligth">Full StackDeveloper</h5>
          <CTA/>
          <HeaderSocial />
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header
