import React, { use, useEffect, useState } from 'react';
import ImportedProductCard from './ImportedProductCard';
import { AuthContext } from '../Auth/AuthContext';

const MyImports = () => {

    let { user } = use(AuthContext);

    let [importList, setImportList] = useState([]);

    console.log('myimport state', importList);

    const handleRemove = (_id) => {
        console.log(_id);

        // delete imported product from the database imported collection
        fetch(`http://localhost:3000/myimports/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('The product has been removed successfully')
                    // Remove from UI state
                    setImportList(importList.filter(product => product._id !== _id));
                }
            })
    }

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/myimports?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setImportList(data)
            })
            .catch(err => console.log(err));
    }, [user]);
    return (
        <div className='space-y-10 px-3 mt-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold logotext'>Your Imported Products</h1>
                <p className='font-thin'>Browse our complete range of globally sourced products, carefully selected to meet diverse business needs. From essential goods to premium items,<br /> we offer reliable, high-quality options to support your import and export operations</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    importList.map(product => <ImportedProductCard
                        handleRemove={handleRemove}
                        key={product._id}
                        product={product} >
                    </ImportedProductCard>)
                }
            </div>
        </div>
    );
};

export default MyImports;