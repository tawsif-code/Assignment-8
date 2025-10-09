import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'
import gitLogo from '../../assets/git-logo.png'
import { Link, NavLink } from "react-router";
import './Navbar.css'
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className='flex justify-between items-center px-4 md:px-12 py-4 mx-auto max-w-7xl bg-white shadow-md'>
                <Link to="/" className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-10 h-10' src={logoImg} alt="" />
                    <h3
                        className='text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                        HERO.IO
                    </h3>
                </Link>
                <nav className='hidden md:flex items-center gap-5'>
                    <NavLink to="/" className='font-medium'>Home</NavLink>
                    <NavLink to="/apps" className='font-medium'>Apps</NavLink>
                    <NavLink to="/installation" className='font-medium'>Installation</NavLink>
                </nav>
                <div className='hidden md:flex'>
                    <a
                        href='https://github.com/'
                        className='text-white font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center p-4 gap-2 rounded-lg cursor-pointer'>
                        <img src={gitLogo} alt="" />
                        Contribute
                    </a>
                </div>

                <div className='md:hidden z-50'>
                    <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden flex flex-col gap-3 px-4 pb-4 z-50'>
                    <NavLink to="/" className='font-medium' onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/apps" className='font-medium' onClick={() => setIsOpen(false)}>Apps</NavLink>
                    <NavLink to="/installation" className='font-medium' onClick={() => setIsOpen(false)}>Installation</NavLink>

                    <a
                        href='https://github.com/'
                        className='text-white font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center p-4 gap-2 rounded-lg cursor-pointer'>
                        <img src={gitLogo} alt="" />
                        Contribute
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;