import React, { useEffect, useState } from 'react';
import ProductCatagoriesData from '../ProductCatagoriesData/ProductCatagoriesData';

const ProductCatagories = () => {
        const [catagories,setCatagories] = useState([]);
        useEffect(() => {
          fetch("http://localhost:5000/catagories")
            .then((res) => res.json())
            .then((data) => setCatagories(data));
        }, []);
    return (
        <div className="body-container w-11/12 mx-auto">
      <p className="mt-7 mb-2 text-3xl text-cyan-500 underline font-bold text-center">
        All Catagories
      </p>
      <div className="card gap-9 mx-5 mt-5 grid grid-cols-1 lg:grid-cols-3">
        {catagories.map((catagory) => (
           <ProductCatagoriesData key={catagory.id} catagory={catagory}></ProductCatagoriesData>
        ))}
        ;
        
      </div>
    </div>
    );
};

export default ProductCatagories;