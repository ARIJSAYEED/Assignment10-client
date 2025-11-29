import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import { AuthContext } from '../Auth/AuthContext';

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const [availableQty, setAvailableQty] = useState(product.quantity); 

    const [importQty, setImportQty] = useState(1);

    const handleImport = () => {
        if (importQty < 1 || importQty > availableQty) return;

        const newImport = {
            ...product,
            buyer_email: user.email,
            original_id: product._id,
            quantity: importQty,
        };
        delete newImport._id;

        // Step 1: Add to My Imports
        fetch(`http://localhost:3000/myimports?email=${user.email}`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newImport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('The product has been added to My Imports');

                // Step 2: Update available quantity in the database
                fetch(`http://localhost:3000/products/${product._id}`, {
                    method: "PATCH",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ quantity: availableQty - importQty })
                })
                    .then(res => res.json())
                    .then(updatedProduct => {
                        // Step 3: Update local state
                        setAvailableQty(updatedProduct.quantity);
                        setImportQty(1); // reset input
                    });
            });
    };

    return (
        <div className='py-10 px-3'>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <img className='h-full object-cover rounded-lg' src={product.image} alt={product.title} />
                </div>

                <div className='space-y-5'>
                    <Link to='/' className='flex items-center gap-2'>
                        <FaArrowLeft />
                        <p className='text-md font-semibold'>Back to Home</p>
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
                            <img className='h-15 w-15 rounded-full p-2 btn' src={product.seller_image} alt={product.seller_name} />
                            <div>
                                <p><span className='text-md font-semibold'>Name: </span>{product.seller_name}</p>
                                <p><span className='text-md font-semibold'>Email: </span>{product.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-b'></div>

                    <div className='flex justify-between items-center'>
                        <p className='text-md font-semibold'>Available Quantity: {availableQty}</p>
                        <button className='btn btn-huboutline'>${product.price}</button>
                    </div>
                    <div>
                        <label htmlFor="import-modal" className='btn btn-hubprimary w-full cursor-pointer'>
                            Import this Product
                        </label>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <input type="checkbox" id="import-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Enter Quantity</h3>
                    <input
                        type="number"
                        min="1"
                        max={product.quantity}
                        value={importQty}
                        onChange={(e) => setImportQty(Number(e.target.value))}
                        className="input input-bordered w-full mb-4"
                    />
                    <div className="modal-action">
                        <label
                            htmlFor="import-modal"
                            className={`btn btn-hubprimary ${importQty < 1 || importQty > product.quantity ? 'opacity-50 btn-disabled cursor-not-allowed' : ''}`}
                            onClick={handleImport}
                        >
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
