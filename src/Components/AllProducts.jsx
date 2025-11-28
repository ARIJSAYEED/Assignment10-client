import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const AllProducts = () => {
    let products = useLoaderData()
    console.log(products);
    return (
        <div className='space-y-10 px-3'>
            <div className='logotext'>
                <h1 className='text-5xl font-bold text-center'>All Products</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;