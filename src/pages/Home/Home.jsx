import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <TrendingApps data={data}></TrendingApps>
        </>
    );
};

export default Home;