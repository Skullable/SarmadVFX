import React from 'react'
import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='list'>
            <a className='list-element' href="">HOME</a>
            <a className='list-element' href="#work">WORK</a>
            <a className='list-element' href="">ABOUT</a>
            <a className='list-element' href="mailto:muhammadsarmad513@gmail.com">SAY HELLO</a>             
        </div>
        <div className='VFX'>
          <h1 className='heading'>SARMADVFX°</h1>
          <p className='text'>GRAPHICS DESIGNER BASED IN PK</p>
        </div>
    </div>
  )
}
