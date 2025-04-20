import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayOut = () => {
    return (
        <>
            <Navbar></Navbar>
           <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
            </>
    );
};

export default MainLayOut;