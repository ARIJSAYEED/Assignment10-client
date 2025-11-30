import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import LatestProduct from '../Components/LatestProduct';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import OurPartner from '../Components/OurPartner';
import GetInTouch from '../Components/GetInTouch';

let latestProductsPromise = fetch('https://assignment-10-server-delta-seven.vercel.app/latestProducts')
    .then(res => res.json())
const HomeLayout = () => {
    return (
        <div>
            {/* <div className='h-20'></div> */}
            <HomeBanner></HomeBanner>
            <div className='h-20'></div>
            <LatestProduct latestProductsPromise={latestProductsPromise}></LatestProduct>
            <div className='h-20'></div>
            <OurPartner></OurPartner>
            <div className='h-20'></div>
            <GetInTouch></GetInTouch>
            <div className='h-20'></div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;