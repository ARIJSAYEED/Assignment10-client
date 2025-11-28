import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import LatestProduct from '../Components/LatestProduct';

const HomeLayout = () => {
    return (
        <div >
            <HomeBanner></HomeBanner>
            <div className='h-20'></div>
            <LatestProduct></LatestProduct>
        </div>
    );
};

export default HomeLayout;