import React from 'react';
import 'swiper/css';
import slide1img from '../assets/slide1image.jpg'
import { Link } from 'react-router';

const HomeBanner = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-start px-3 gap-5'>
                <div className='w-full md:w-1/2'>
                    <img className="w-full h-full object-cover rounded-lg" src={slide1img} alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center text-center md:text-end items-center md:items-end space-y-5'>
                    <h1 className='capitalize text-2xl md:text-4xl font-bold'>we make transport <br /><span className='text-5xl md:text-7xl logotext'>fast and safe</span></h1>
                    <p className='text-sm font-thin'>We deliver your goods quickly and securely,<br /> ensuring a smooth and reliable transport experience every time.</p>
                    <Link to='/exportProducts'>
                        <button className='btn btn-hubprimary capitalize'>export your product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;