import React, { useEffect, useState } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = () => {
    const [allTrendingApps, setAllTrendingApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/trendingAppsData.json")
            .then(res => res.json())
            .then(data => {
                setAllTrendingApps(data)
                setLoading(false);
            })
            .catch(() => setLoading(false));
}, [])

return (
    <div className='bg-gray-100 p-10'>
        <div className='m-10 text-center'>
            <h1 className='text-5xl text-[#001931] font-bold'>Trending Apps</h1>
            <p className='text-2xl text-[#627382] font-semibold p-2'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        {loading ? (
            <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
            </div>
        ) : (
            <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-full mx-auto'>
                    {
                        allTrendingApps?.map((singleTrendingApp) => <TrendingApp key={singleTrendingApp.id} singleTrendingApp={singleTrendingApp}></TrendingApp>)
                    }
                </div>
                <div className='flex justify-center m-10'>
                    <a href="/apps">
                        <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-lg text-xl text-white font-bold cursor-pointer'>
                            Show All
                        </button>
                    </a>
                </div>
            </>
        )}
    </div>
);
};

export default TrendingApps;