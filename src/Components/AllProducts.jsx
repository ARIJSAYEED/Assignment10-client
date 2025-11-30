import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const AllProducts = () => {
    let products = useLoaderData()
    return (
        <div className='space-y-10 sm:space-y-4 sm:px-1 px-3 mt-10'>
            <div className='text-center'>
                <h1 className='text-5xl sm:text-3xl font-bold logotext'>All Products</h1>
                <p className='sm:text-sm font-thin'>Browse our complete range of globally sourced products, carefully selected to meet diverse business needs. From essential goods to premium items,<br /> we offer reliable, high-quality options to support your import and export operations</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-2 gap-5'>
                {
                    products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;