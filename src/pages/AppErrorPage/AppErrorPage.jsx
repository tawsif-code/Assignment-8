import React from 'react';
import appErrorImg from '../../assets/App-Error.png'

const AppErrorPage = () => {
    return (
        <div className='text-center m-10'>
            <img className='mx-auto' src={appErrorImg} alt="" />
            <h1 className='text-6xl text-[#001931] font-bold mt-10'>OPPS!! APP NOT FOUND!</h1>
            <p className='text-2xl text-[#627382] font-semibold p-5'>The App you are requesting is not found on our system. Please try another apps.</p>
            <a href="/">
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-4 rounded-lg text-2xl text-white font-bold cursor-pointer'>
                    Go Back!
                </button>
            </a>
        </div>
    );
};

export default AppErrorPage;