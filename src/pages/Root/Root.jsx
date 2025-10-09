import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer'

const Root = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div>
            <Navbar></Navbar>
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/80 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#632EE3]"></div>
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;