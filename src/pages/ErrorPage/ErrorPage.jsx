import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='text-center m-10'>
                <img className='mx-auto' src={errorImg} alt="" />
                <h1 className='text-6xl text-[#001931] font-bold mt-10'>OOPS!! PAGE NOT FOUND!</h1>
                <p className='text-2xl text-[#627382] font-semibold p-5'>The page you are looking for is not available.</p>
                <a href="/">
                    <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-4 rounded-lg text-2xl text-white font-bold cursor-pointer'>
                        Go Back!
                    </button>
                </a>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;