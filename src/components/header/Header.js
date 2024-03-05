import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGithub } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Header = () => {


    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [isHoveringFa, setIsHoveringFa] = useState(false)
    const [isHoveringGit, setIsHoveringGit] = useState(false)
    const [isHoveringLin, setIsHoveringLin] = useState(false)
    const [isHoveringDow, setIsHoveringDow] = useState(false)
    //   <motion.ul initial={{x:-500,scale:0.2,opacity:0}} animate={{x:0,scale:1,opacity:1}} transition={{duration:1.5}}  className='flex text-white uppercase text-[11px] gap-2 avenir'>
    //   <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://twitter.com/jaketrent" /></li>
    //   <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
    //   <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
    //   <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
    //   <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>

    // </motion.ul>
    // </div>
    // </div>

    // <motion.div className='flex gap-4 pr-10' initial={{x:500,scale:0.2,opacity:0}} animate={{x:0,scale:1,opacity:1}} transition={{duration:1.5}}>
    // <SocialIcon network='email' />
    // <h1 className='hidden md:flex'>Get in Touch</h1>
    // </motion.div>

    return (
        <>
            <style>
                {`
          .text-blue-5001{
            color: #C8C8C8;
            height: 30px;
            width: 40px;
          }
          .text-blue-5001:hover {
            color:#F59E0B;
            transition: color 0.5s;
          }
        `}
            </style>
            <div className='rounded-lg border-b sticky top-0  bg-white bg-opacity-10 h-12 flex items-center md:w-9/12 w-10/12 container mx-auto justify-between z-20'>


                <motion.ul initial={{ x: -500, scale: 0.2, opacity: 0 }} animate={{ x: 0, scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className='flex uppercase text-[7px] gap-2 avenir'>
                    <Tooltip TransitionComponent={Zoom} title="Facebook">
                        <a
                            href="https://www.facebook.com/uzair.aaj/" >


                            <FacebookIcon className='text-blue-5001 ' />

                        </a>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Github Profile">
                        <a href="https://github.com/UzairAJ1"
                        >
                            <GitHubIcon className='text-blue-5001' />

                        </a>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Linkedin">
                        <a href="https://www.linkedin.com/in/uzair-ali-javed/"
                        >
                            <LinkedInIcon className='text-blue-5001' />

                        </a>
                    </Tooltip>

                    <Tooltip TransitionComponent={Zoom} title="View Resume">
                        <a href='https://drive.google.com/file/d/1g22J_RgrTr8ATmRgBaV2GVvXsY4Y57Ds/view?usp=sharing' download
                        >
                            <DownloadForOfflineIcon className='text-blue-5001' />

                        </a>
                    </Tooltip>

                    {/* <li ><SocialIcon bgColor="transparent" fgColor="#ff5a01" url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
                    <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
                    <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li>
                    <li className='hover:text-[#FF525E] hover:duration-200 duration-200 cursor-pointer'><SocialIcon url="https://www.upwork.com/freelancers/~01d174225848fa0f54" /></li> */}

                </motion.ul>


                <div>
                    <motion.div className='flex gap-4 pr-10 items-center' initial={{ x: 500, scale: 0.2, opacity: 0 }} animate={{ x: 0, scale: 1, opacity: 1 }} transition={{ duration: 1.5 }}>
                        <a href="https://stackoverflow.com">
                            <EmailIcon className='text-blue-5001' />
                        </a>
                        <h1 className='hidden md:flex text-sm'>Get in Touch</h1>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Header