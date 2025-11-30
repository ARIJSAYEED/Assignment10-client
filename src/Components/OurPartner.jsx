import React from 'react';

const OurPartner = () => {
    return (
        <div>
            <div className='space-y-10 px-3'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold logotext capitalize border-b-2'>Our Partners</h1>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5'>
                    <img className='h-32 md:h-40 w-full object-cover rounded-lg hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400" alt="Image 1" />
                    <img className='h-32 md:h-40 w-full object-cover rounded-lg hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400" alt="Image 2" />
                    <img className='h-32 md:h-40 w-full object-cover rounded-lg hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" alt="Image 3" />
                    <img className='h-32 md:h-40 w-full object-cover rounded-lg hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400" alt="Image 4" />
                    <img className='h-32 md:h-40 w-full object-cover rounded-lg hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400" alt="Image 5" />
                </div>
            </div>
        </div>
    );
};

export default OurPartner;