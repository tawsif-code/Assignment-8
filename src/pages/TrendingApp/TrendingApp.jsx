import React from 'react';
import { Link } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const TrendingApp = ({ singleTrendingApp }) => {
    const { id, image, title, downloads, ratingAvg } = singleTrendingApp;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='bg-white shadow-md p-6 text-center space-y-5 rounded-lg'>
                <img className='mx-auto mb-5' src={image} alt="" />
                <h3 className='text-2xl text-[#001931] font-semibold'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-2 bg-[#F1F5E8] px-5 py-2 rounded-lg text-lg text-[#00D390] font-bold'><img className='w-5 h-5' src={downloadImg} alt="" />{downloads}</p>
                    <p className='flex items-center gap-2 bg-[#FFF0E1] px-5 py-2 rounded-lg text-lg text-[#FF8811] font-bold'><img className='w-5 h-5' src={ratingImg} alt="" />{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;