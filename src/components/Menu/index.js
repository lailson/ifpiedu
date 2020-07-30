import React from 'react';
import Logo from '../../assets/logo.png'
import Button from '../Button'
import './Menu.css'

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/' >
        <img  src={Logo} className='Logo' alt="IFIPI FLIX"/>
      </a>


      <Button as='a' className="ButtonLink" href='/'>
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;