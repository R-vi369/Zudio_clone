import React from 'react'
import '../styles/ZudioNearYou.scss'
import {Link} from 'react-router-dom'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
const ZudioNearYou = () => {
  return (
    <>
    <div className="zudioNearYou">

    <div className='HSL' >
       
       <Link className='hsl_link'  to='/'>Home</Link>
       <MdKeyboardDoubleArrowRight fontSize="15px"/>
        <Link className='hsl_link' to='/ZudioNearYou'>Store Locator</Link>
        <MdKeyboardDoubleArrowRight fontSize="15px"/>


    </div>


    <div>
      <p>CURRENTLY IN 42 CITIES IN INDIA, COMING TO YOUR CITY VERY SOON</p>
    </div>
    
    </div>
    
    
    
    </>
  )
}

export default ZudioNearYou