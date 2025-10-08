import React, { Suspense, useEffect, useState } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = () => {
    const [allTrendingApps, setAllTrendingApps] = useState([]);

    useEffect(() => {
        fetch("trendingAppsData.json")
            .then(res => res.json())
            .then(data => {
                setAllTrendingApps(data)
            })
    }, [])

    return (
        <div>
            <div className='m-10 text-center'>
                <h1 className='text-5xl text-[#001931] font-bold'>Trending Apps</h1>
                <p className='text-2xl text-[#627382] font-semibold p-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<span>loading......</span>}>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-full mx-auto'>
                    {
                        allTrendingApps?.map((singleTrendingApp) => <TrendingApp key={singleTrendingApp.id} singleTrendingApp={singleTrendingApp}></TrendingApp>)
                    }
                </div>
                <div className='flex justify-center m-10'>
                    <a href="/apps">
                        <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5 py-2 rounded-lg text-xl text-white font-bold cursor-pointer'>
                            Show All
                        </button>
                    </a>
                </div>
            </Suspense>
        </div>
    );
};

export default TrendingApps;