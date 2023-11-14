import React from 'react'
import '../styles/ZudioNearYou.scss'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Location from './Location'
import Pagination from './Pagination'
import Footer from '../components/Footer'
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
            <div className="search flex gap-6 ">

              <input type="text" placeholder='Select State' className='w-[18rem] h-[2.4rem] px-4 text-black'/>
           
              <input type="text" placeholder='Select City' className='w-[18rem] h-[2.4rem] px-4 text-black' />
            </div>

          </div>


        </div>


        <div className="AllStore">ALL STORES (437)</div>



        <div className=" flex m-5  flex-wrap">

          <Location name='AHMEDABAD, SATYAMEV ELITE' addressDetail='GF Shop No 101 to 106, Satyamev Elite, Bopal Bridge, Bopal Ambli Road, Opp BRTS , Ahmedabad - 380058 , Gujarat' />


          <Location name='INDORE, PHOENIX CITADEL MALL' addressDetail='Survey No. 248/1/1, Next to Mumbai Agra Bypass Village Khajrana , Indore - 452016 , Madhya Pradesh' />

          <Location name='JALANDHAR, CURO HIGH STREET' addressDetail='66 feet road, Near Urban Estate, Phase- II , Jalandhar - 144022 , Punjab' />


          <Location name='AHMEDABAD, SHALIN SQUARE' addressDetail='Hathijan Circle, Vinzol , Ahmedabad - 382445 , Gujarat' />

          <Location name='MUZAFFARPUR, SHIV MITRA TOWER' addressDetail='Kalambagh Road, Near Reliance Petroleum, Gannipur, PS Kazi, Anchal Mushari , Muzaffarpur - 842002 , Bihar' />

          <Location name='AHMEDABAD, SATYAMEV ELITE' addressDetail='GF Shop No 101 to 106, Satyamev Elite, Bopal Bridge, Bopal Ambli Road, Opp BRTS , Ahmedabad - 380058 , Gujarat' />



          <Location name='NELLORE, GT ROAD' addressDetail='D.No.24/2/436/2, Saraswati Nagar, KVR Petrol Bunk,Dargamitta , Nellore - 524003 , Andhra Pradesh' />


          <Location name='BENGALURU, VIGNAN NAGAR' addressDetail='Site No. 3 & 4, BE, Katta No. 301/143/3/A, Vibhutipura Village, K. R. Puram, Hobli , Bengaluru - 560043 , Karnataka' />


          <Location name='AHMEDABAD, SATYAMEV ELITE' addressDetail='GF Shop No 101 to 106, Satyamev Elite, Bopal Bridge, Bopal Ambli Road, Opp BRTS , Ahmedabad - 380058 , Gujarat' />


        </div>

        <div className="flex  justify-center">

        <Pagination/>
        </div>


    <Footer/>


      </div>



    </>
  )
}

export default ZudioNearYou