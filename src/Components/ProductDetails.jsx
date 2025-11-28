import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";


const ProductDetails = () => {
    let product = useLoaderData();
    console.log(product);
    return (
        <div className='py-10'>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <img className='h-full object-cover rounded-lg' src={product.image} alt="" />
                </div>
                <div className='space-y-5'>
                    <Link className='flex items-center gap-2'>
                        <FaArrowLeft></FaArrowLeft>
                        <p to='/' className='text-md font-semibold'>Back to Home</p>
                    </Link>
                    <h1 className='text-5xl font-bold logotext'>{product.title}</h1>
                    <div className='border-b'></div>
                    <div className='flex justify-between'>
                        <p className='text-md font-semibold'>Rating: {product.rating}</p>
                        <p className='text-md font-semibold'>From: {product.origin}</p>
                    </div>
                    <div className='border-b'></div>
                    <div>
                        <h1 className='text-2xl font-semibold logotext'>Product Description:</h1>
                        <p className='font-thin'>{product.description}</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold logotext'>Seller Information:</h1>
                        <div className='flex gap-5 items-center'>
                            <img className='h-15 w-15 rounded-full p-2 btn' src={product.seller_image} alt="" />
                            <div>
                                <p>{product.seller_name}</p>
                                <p>{product.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b'></div>
                    <div className='flex justify-between items-center'>
                        <p className='text-md font-semibold'>Available Quantity: {product.quantity}</p>
                        <button className='btn btn-huboutline'>${product.price}</button>
                    </div>
                    <div>
                        <button className='btn btn-hubprimary w-full'>Import this Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;