import React from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/logo.png'
import xImg from '../../assets/x.png'
import linkedinImg from '../../assets/linkedin.png'
import facebookImg from '../../assets/facebook.png'

const Footer = () => {
    return (
        <footer className='bg-[#001931] p-5'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-6 md:gap-0'>
                <Link to="/" className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-10 h-10' src={logoImg} alt="" />
                    <h3
                        className='text-white font-semibold'>
                        HERO.IO
                    </h3>
                </Link>
                <div className='flex flex-col md:items-end items-center'>
                    <p className='text-white font-bold'>Social Links</p>
                    <div className='flex items-center gap-4 mt-2 cursor-pointer'>
                        <img src={xImg} alt="" />
                        <img src={linkedinImg} alt="" />
                        <img src={facebookImg} alt="" />
                    </div>
                </div>
            </div>
            <p className='text-[#FAFAFA] text-center mt-5 border-t border-white'>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;