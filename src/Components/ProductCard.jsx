import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div className='border border-neutral-300 p-5 rounded-lg shadow-lg space-y-5 hover:scale-105 transition-all duration-300'>
            <div>
                <img className='h-60 w-full object-cover rounded-lg' src={product.image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{product.title}</h1>
            </div>
            <div className='border-b border-neutral-300'></div>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <p>Rating: {product.rating}</p>
                </div>
                <div>
                    <p>Available Amount: {product.quantity}</p>
                </div>
            </div>
            <div className='border-b border-neutral-300'></div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold btn btn-huboutline'>${product.price}</h1>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm'>From: {product.origin}</p>
                    <p>By: {product.seller_name}</p>
                </div>
            </div>
            <div>
                <Link to={`/productDetails/${product._id}`}>
                    <button className='btn btn-hubprimary capitalize w-full'>
                        see details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;