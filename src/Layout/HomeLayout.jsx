import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import LatestProduct from '../Components/LatestProduct';

let latestProductsPromise = fetch('http://localhost:3000/latestProducts')
.then(res=>res.json())
const HomeLayout = () => {
    return (
        <div>
            {/* <div className='h-20'></div> */}
            <HomeBanner></HomeBanner>
            <div className='h-20'></div>
            <LatestProduct latestProductsPromise={latestProductsPromise}></LatestProduct>
        </div>
    );
};

export default HomeLayout;