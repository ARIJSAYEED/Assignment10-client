import React, { use } from 'react';
import ProductCard from './ProductCard';

const LatestProduct = ({ latestProductsPromise }) => {
    let latestProducts = use(latestProductsPromise)
    return (
        <div>
            <div className='space-y-10 px-3'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold logotext capitalize border-b-2'>latest product</h1>
                    <p className='font-thin'>Discover our newest arrivals sourced from trusted global suppliers. Each product meets international quality standards, <br /> offering reliability and value to help grow your business</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    {
                        latestProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestProduct;