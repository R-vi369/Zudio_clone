import React from 'react'
import '../styles/ZudioNearYou.scss'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const ZudioNearYou = () => {
  return (
    <>
      <div className="zudioNearYou">
        <div className='HSL' >
          <Link className='hsl_link' to='/'>Home</Link>
          <MdKeyboardDoubleArrowRight fontSize="15px" />
          <Link className='hsl_link' to='/ZudioNearYou'>Store Locator</Link>
          <MdKeyboardDoubleArrowRight fontSize="15px" />
        </div>

        <div className="location">
          <h1>Store locator</h1>
          <div className="findZudioStore">
            <h1>find the zudio store closest to you</h1>
            <div className="search">

              <input type="text" />
              g
              <input type="text" />
            </div>

          </div>

        </div>

      </div>



    </>
  )
}

export default ZudioNearYou