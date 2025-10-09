import React, { useEffect, useState } from 'react';
import { getInstalledApp, removeInstalledApp } from '../../utils/localStorage';
import { useLoaderData } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    const data = useLoaderData();

    useEffect(() => {
        const installedAppIds = getInstalledApp().map(id => Number(id));
        const installedAppList = data.filter(app => installedAppIds.includes(Number(app.id)));
        setInstalledApps(installedAppList);
    }, [data]);

    const handleSort = (e) => {
        const value = e.target.value;
        setSortOrder(value);
        let sortedApps = [...installedApps];
        if (value === 'high-low') {
            sortedApps.sort((a, b) => parseInt(b.downloadCount) - parseInt(a.downloadCount));
        } else if (value === 'low-high') {
            sortedApps.sort((a, b) => parseInt(a.downloadCount) - parseInt(b.downloadCount));
        }
        setInstalledApps(sortedApps);
    };

    const handleUninstall = (app) => {
        const updatedApps = installedApps.filter(a => a.id !== app.id);
        setInstalledApps(updatedApps);
        removeInstalledApp(app.id);
        toast.success(`${app.title} uninstalled successfully!`);
    };

    return (
        <div className='bg-gray-100 p-10'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center space-y-5'>
                    <h1 className='text-5xl text-[#001931] font-bold'>Your Installed Apps</h1>
                    <p className='text-2xl text-[#627382] font-semibold'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 sm:p-10 gap-4'>
                    <p className='text-2xl text-[#001931] font-semibold'>{installedApps.length} Apps Found</p>
                    <select
                        value={sortOrder}
                        onChange={handleSort}
                        className='border border-gray-300 rounded-lg p-2 text-lg cursor-pointer'
                    >
                        <option value=''>Sort By Downloads</option>
                        <option value='high-low'>High-Low</option>
                        <option value='low-high'>Low-High</option>
                    </select>
                </div>
                {installedApps.length === 0 ? (<p className='text-xl sm:text-2xl text-[#627382] text-center font-bold'>No apps installed yet.</p>) :
                    (
                        <div className='space-y-5'>
                            {installedApps.map(app => (
                                <div key={app.id} className='bg-white shadow-md rounded-lg p-5'>
                                    <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-center gap-4 sm:gap-5'>
                                        <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5'>
                                            <img className='w-20 h-20' src={app.image} alt="" />
                                            <div>
                                                <h4 className='text-lg text-[#001931] font-semibold'>{app.title}</h4>
                                                <div className='flex items-center gap-5 mt-2'>
                                                    <p className='flex items-center gap-1'>
                                                        <img className='w-5 h-5' src={downloadImg} alt="" />{app.downloads}
                                                    </p>
                                                    <p className='flex items-center gap-1'>
                                                        <img className='w-5 h-5' src={ratingImg} alt="" />{app.ratingAvg}
                                                    </p>
                                                    <p className='flex items-center gap-1'>
                                                        <img className='w-5 h-5' src={reviewImg} alt="" />{app.reviews}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleUninstall(app)} className='bg-[#00D390] px-4 py-2 rounded-lg text-lg text-white font-semibold cursor-pointer'>Uninstall</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;