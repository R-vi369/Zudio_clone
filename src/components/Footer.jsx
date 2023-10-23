import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
    return (
        <>
            <div className='h-20 bg-black text-white flex justify-between items-center'>
                <div className='mx-20 '>
                    <p >COPYRIGHT 	&copy; 2023 ZUDIO</p>

                    <div className='flex items-center gap-2'>
                        <p>DON’T MISS OUT ON THE LATEST IN FASHION.</p>
                        <p><a href="https://www.instagram.com/myzudio/?hl=en" target='_blank'>

                            <AiOutlineInstagram/>
                        </a>
                        </p>
                        <p> FOLLOW US @MYZUDIO</p>
                    </div>
                </div>
                <div className='mx-20'>
                    <p>Contact us- Zudiohelp@trent-tata.com</p>
                </div>

            </div>



        </>
    )
}

export default Footer