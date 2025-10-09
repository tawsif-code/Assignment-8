import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';
import searchImg from '../../assets/search.png'

const AllApps = () => {
    const allApps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApps, setFilteredApps] = useState(allApps);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const delayDebounce = setTimeout(() => {
            const filtered = allApps.filter(app =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApps(filtered);
            setLoading(false);
        }, 500);
        return () => clearTimeout(delayDebounce);
    }, [searchTerm, allApps]);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100'>
            <div className='m-10 text-center'>
                <h1 className='text-5xl text-[#001931] font-bold'>Our All Applications</h1>
                <p className='text-2xl text-[#627382] font-semibold mt-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-wrap justify-between items-center gap-3 mb-6'>
                <p className='text-2xl text-[#001931] font-semibold'>({filteredApps.length}) Apps Found</p>
                <div className='flex items-center border-2 border-gray-400 rounded-lg px-3 py-2 sm:w-1/2 md:w-1/3 bg-white'>
                    <img className='mr-2' src={searchImg} alt="" />
                    <input
                        type="text"
                        placeholder='Search Apps'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='flex-1 outline-none text-base sm:text-lg'
                    />
                </div>
            </div>
            <div className='mt-10'>
                {loading ? (
                    <div className='flex justify-center items-center h-40'>
                        <div className='animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#632EE3]'></div>
                    </div>
                ) : filteredApps.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-full mx-auto'>
                        {filteredApps.map((singleApp) => (
                            <AllApp key={singleApp.id} singleApp={singleApp}></AllApp>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='text-4xl text-gray-600 font-bold mt-10'>No App Found</p>
                        <a href="/apps" className='mt-10'>
                            <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-lg text-xl text-white font-bold cursor-pointer'>
                                Show All
                            </button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApps;