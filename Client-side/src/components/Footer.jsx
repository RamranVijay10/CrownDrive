import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'


const Footer = () => {
  return (
     <motion.div
     initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
     className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.2}}
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <motion.img
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.65, delay:0.3}}
                    src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <motion.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.5, delay:0.4}}
                    className='max-w-80 mt-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </motion.p>
                    <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.5, delay:0.5}}
                     className='flex items-center gap-3 mt-6'>
                       <a href="#"> <img src={assets.facebook_logo} alt="FacebookLogo" className='w-5 h-5 ' /></a>
                       <a href="#"> <img src={assets.instagram_logo} alt="InstagramLogo" className='w-5 h-5 ' /></a>
                       <a href="#"> <img src={assets.twitter_logo} alt="TwitterLogo" className='w-5 h-5 ' /></a>
                       <a href="#"> <img src={assets.gmail_logo} alt="GmailLogo" className='w-5 h-5 ' /></a>
                    </motion.div>
                </div>
  <motion.div
  initial={{opacity:0, y:20}}
  whileInView={{opacity:1, y:0}}
  transition={{duration:0.6, delay:0.4}}
  className='flex flex-wrap justify-between w-1/2 gap-8'>

                <div> 
                    <h2 className='text-base font-medium uppercase text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Cars</a></li>
                        <li><a href="#">About Us</a></li>
                        {/* <li><a href="#">Contact Us</a></li> */}
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                        {/* <li><a href="#">Contact Us</a></li> */}
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Contacts</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li>123 Luxury Drive,</li>
                        <li> Haridwar, UK 249402</li>
                        <li>Phone: +91 1234567890</li>
                        <li>Email: info@yourwebsite.com</li>
                        {/* <li><a href="#">Contact Us</a></li> */}
                    </ul>
                </div>
  </motion.div>


               

                {/* <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            Arrow icon //this is a comment
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div> */}
            </motion.div>


            {/* <hr className='border-gray-300 mt-8' /> */}
            <motion.div
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> </li>
                    <li>|</li>
                    <li><a href="#">Terms</a> </li>
                    <li>|</li>
                    <li><a href="#">Cookies</a> </li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer