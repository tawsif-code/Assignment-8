import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import { saveInstalledApp } from '../../utils/localStorage'

const AppDetails = () => {

    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    const { image, title, companyName, description, reviews, ratingAvg, downloads, ratings, size } = singleApp;

    const [installed, setInstalled] = useState(false);

    const handleInstall = (id) => {
        setInstalled(true);
        toast.success(`${title} Installed Successfully!`);
        saveInstalledApp(id);
    };

    return (
        <div className='max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-stretch gap-6 md:gap-10'>
                <div className='md:w-1/3 w-full'>
                    <img className='w-full h-full object-contain' src={image} alt="" />
                </div>
                <div className='md:w-2/3 w-full flex-1 space-y-5 text-center md:text-left'>
                    <h1 className='text-4xl text-[#001931] font-bold'>{title}</h1>
                    <p className='text-2xl text-[#627382] font-semibold border-b-2 border-gray-200 pb-10'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                    <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-6 sm:gap-10'>
                        <div>
                            <img src={downloadImg} alt="" />
                            <p className='text-lg text-[#001931] font-semibold'>Downloads</p>
                            <p className='text-4xl text-[#001931] font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img src={ratingImg} alt="" />
                            <p className='text-lg text-[#001931] font-semibold'>Average Ratings</p>
                            <p className='text-4xl text-[#001931] font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={reviewImg} alt="" />
                            <p className='text-lg text-[#001931] font-semibold'>Total Reviews</p>
                            <p className='text-4xl text-[#001931] font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={()=>handleInstall(id)}
                            disabled={installed}
                            className='bg-[#00D390] p-5 rounded-lg text-lg text-white font-bold cursor-pointer'
                        >
                            {installed ? 'Installed' : `Install Now (${size})`}
                        </button>
                    </div>
                </div>
            </div>
            <div className='space-y-10 mt-10 border-t-2 border-b-2 border-gray-200 p-10'>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[...ratings].reverse()} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF8811" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl text-[#001931] font-bold'>Description</h3>
                <p className='text-lg text-[#627382] font-semibold mt-4 mb-10'>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AppDetails;