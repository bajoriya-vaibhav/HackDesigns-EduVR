import React from 'react'
import { Icon } from '@iconify/react';
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="vertical-navbar">
      <ul>
        <li>
        <Link to='/intro' className='h-full'><Icon icon="game-icons:vr-headset" color="#EEEEEE" width="15" className='w-full'/></Link>
        </li>
        <li>
        <Link to='/' className='w-full'><Icon icon="material-symbols:home" width="15" /></Link>
        </li>
        <li>
        <Link to='/courses' className='w-full'><Icon icon="zondicons:education" width="15" /></Link>
        </li>
        <li>
        <Link to='/progress' className='w-full'><Icon icon="game-icons:progression" width="15" /></Link>
        </li>
        <li>
        <Link to='/vr' className='w-full'><Icon icon="icon-park-solid:vr-glasses" width="15" /></Link>
        </li>
        <li>
        <Link to='/about' className='w-full'><Icon icon="mdi:about-circle-outline"  width="18" /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
