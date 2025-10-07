import React from 'react';
import playStoreImg from '../../assets/play-store.png'
import appStoreImg from '../../assets/app-store.png'
import bannerImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto text-center p-8'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl text-[#001931] font-bold leading-tight'>
                    We Build <br /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                </h1>
                <p className='text-[#627382] mt-5 sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 items-center'>
                    <button className='btn border border-gray-400 px-4 py-2 rounded-lg'>
                        <a
                            href="https://play.google.com/store/games?hl=en"
                            className='flex items-center gap-2 text-[#001931] font-semibold'>
                            <img src={playStoreImg} alt="" />
                            Google Play
                        </a>
                    </button>
                    <button className='btn border border-gray-400 px-4 py-2 rounded-lg'>
                        <a
                            href="https://www.apple.com/app-store/"
                            className='flex items-center gap-2 text-[#001931] font-semibold'>
                            <img src={appStoreImg} alt="" />
                            App Store
                        </a>
                    </button>
                </div>
                <img className='mt-10 mx-auto w-full max-w-3xl object-contain' src={bannerImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 sm:px-8 py-12 text-white'>
                <div className='max-w-6xl mx-auto text-center px-4 sm:px-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8'>Trusted by Millions, Built for You</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-4'>
                        <div className='space-y-4'>
                            <h6 className='font-semibold text-lg'>Total Downloads</h6>
                            <p className='text-4xl sm:text-5xl font-bold'>29.6M</p>
                            <p className='text-sm sm:text-base'>21% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <h6 className='font-semibold text-lg'>Total Reviews</h6>
                            <p className='text-4xl sm:text-5xl font-bold'>906K</p>
                            <p className='text-sm sm:text-base'>46% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <h6 className='font-semibold text-lg'>Active Apps</h6>
                            <p className='text-4xl sm:text-5xl font-bold'>132+</p>
                            <p className='text-sm sm:text-base'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;