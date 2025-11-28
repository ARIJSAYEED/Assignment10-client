import React from 'react';
import NavBar from '../Components/NavBar'
import HomeBanner from '../Components/HomeBanner'
import LatestProduct from '../Components/LatestProduct'
import { Outlet } from 'react-router';
const Root = () => {
    return (
    <div className='max-w-7xl mx-auto'>
      <NavBar></NavBar>
      {/* <div className='h-10'></div> */}
      <Outlet></Outlet>
      {/* <LatestProduct></LatestProduct> */}
    </div>
  )
};

export default Root;