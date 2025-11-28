import React from 'react';
import 'swiper/css';
import slide1img from '../assets/slide1image.jpg'
const HomeBanner = () => {
    return (
        <div>
            <div className='flex justify-start px-3'>
                <div className='w-1/2'>
                    <img className="w-full h-full object-cover rounded-lg" src={slide1img} alt="" />
                </div>
                <div className='w-1/2 flex flex-col justify-center items-end space-y-5'>
                    <h1 className='capitalize text-4xl font-bold text-end'>we make transport <br /><span className='text-7xl logotext'>fast and safe</span></h1>
                    <button className='btn btn-hubprimary capitalize'>export your product</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;