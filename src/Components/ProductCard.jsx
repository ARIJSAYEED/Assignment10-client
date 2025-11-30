import React from 'react';
import { Link } from 'react-router';
 
const ProductCard = ({ product }) => {
    return (
        <div className='border border-neutral-300 p-3 md:p-5 rounded-lg shadow-lg space-y-3 md:space-y-5 hover:scale-105 transition-all duration-300'>
            <div>
                <img className='h-48 md:h-60 w-full object-cover rounded-lg' src={product.image} alt="" />
            </div>
            <div>
                <h1 className='text-xl md:text-2xl font-bold'>{product.title}</h1>
            </div>
            <div className='border-b border-neutral-300'></div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
                <div>
                    <p className='text-sm md:text-base'>Rating: {product.rating}</p>
                </div>
                <div>
                    <p className='text-sm md:text-base'>Available: {product.quantity}</p>
                </div>
            </div>
            <div className='border-b border-neutral-300'></div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold btn btn-huboutline'>${product.price}</h1>
                </div>
                <div className='flex flex-col items-start sm:items-end'>
                    <p className='text-xs md:text-sm'>From: {product.origin}</p>
                    <p className='text-sm md:text-base'>By: {product.seller_name}</p>
                </div>
            </div>
            <div>
                <Link to={`/productDetails/${product._id}`}>
                    <button className='btn btn-hubprimary capitalize w-full text-sm md:text-base'>
                        see details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;