import React, { use, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const ExportProducts = () => {
    let { user } = use(AuthContext)
    let [exports,setExports]=useState([])
    const handleExport = (e) => {
        e.preventDefault()

        let title = e.target.title.value;
        let image = e.target.image.value;
        let price = e.target.price.value;
        let origin = e.target.origin.value;
        let description = e.target.description.value;
        let quantity = e.target.quantity.value;
        let rating = e.target.rating.value;
        let seller_name = e.target.seller_name.value;
        let email = e.target.email.value;
        let seller_image = e.target.seller_image.value;

        const newExport = {
            title: title,
            image: image,
            price: price,
            origin: origin,
            description: description,
            quantity: quantity,
            rating: rating,
            seller_name: seller_name,
            email: email,
            seller_image: seller_image,
            created_at: new Date().toISOString() 
        }
        console.log(newExport);

        fetch('http://localhost:3000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newExport)

        })
        .then(res=>res.json())
        .then(data=>{
            newExport._id = data.insertedId;
            const newExports =[...exports,newExport]
            setExports(newExports)
            alert('The product has been added successfully')
        })
    }

    return (
        <div className='px-3 py-10'>
            <form onSubmit={handleExport} className='space-y-5 flex flex-col gap-5 items-center'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-3xl md:text-5xl font-bold logotext'>Please ! Fill this form</h1>
                        <p className='text-sm md:text-md font-thin'>Help us by giving the authentic information</p>
                    </div>
                </div>
                <div className='border shadow-2xl w-full max-w-[600px] p-3 md:p-5 rounded-lg space-y-3'>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-2xl md:text-3xl font-bold logotext text-center'>Product Information</h1>
                        <div>
                            <label className='font-semibold'>Product Name</label>
                            <input className='input w-full' type="text" name="title" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Product Image URL</label>
                            <input className='input w-full' type="text" name="image" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Price</label>
                            <input className='input w-full' type="number" name="price" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Where does this Product belongs to</label>
                            <input className='input w-full' type="text" name="origin" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Describle your product</label>
                            <input className='input w-full' type="text" name="description" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Quantity</label>
                            <input className='input w-full' type="number" name="quantity" id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Rating</label>
                            <input className='input w-full' type="number" name="rating" id="" />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='text-2xl md:text-3xl font-bold logotext text-center'>Seller Information</h1>
                        <div>
                            <label className='font-semibold'>Name</label>
                            <input className='input w-full' type="text" name="seller_name" defaultValue={user.displayName} readOnly id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Email</label>
                            <input className='input w-full' type="email" name="email" defaultValue={user.email} readOnly id="" />
                        </div>
                        <div>
                            <label className='font-semibold'>Image URL</label>
                            <input className='input w-full' type="text" name="seller_image" defaultValue={user.photoURL} readOnly id="" />
                        </div>
                    </div>
                    <div>
                        <button className='w-full btn btn-hubprimary'>Export</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ExportProducts;