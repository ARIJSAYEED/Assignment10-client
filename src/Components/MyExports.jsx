import React, { useState, useEffect, use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import ExportedProductCard from "./ExportedProductCard";

const MyExports = () => {
    const { user } = use(AuthContext);
    const [exportsList, setExportsList] = useState([]);
    console.log(exportsList);

    useEffect(() => {
        // if (!user?.email) return;
        fetch(`http://localhost:3000/myexports?email=${user.email}`)
            .then(res => res.json())
            .then(data => setExportsList(data))
            .catch(err => console.log(err));
    }, [user]);

    return (
        <div className='space-y-10 px-3 mt-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold logotext'>Your Exported Products</h1>
                <p className='font-thin'>Browse our complete range of globally sourced products, carefully selected to meet diverse business needs. From essential goods to premium items,<br /> we offer reliable, high-quality options to support your import and export operations</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    exportsList.map(product=><ExportedProductCard product={product}></ExportedProductCard>)
                }
            </div>
        </div>
    );
};

export default MyExports;
