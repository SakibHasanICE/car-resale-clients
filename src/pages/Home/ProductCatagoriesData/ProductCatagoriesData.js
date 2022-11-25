import React from "react";
import { Link } from "react-router-dom";

const ProductCatagoriesData = ({ catagory }) => {
  const { _id,img,CatagoryName } = catagory;
  console.log(_id, img,CatagoryName)
  return (
    <div className="border-slate-400 rounded-md border-2 px-4 pb-9">
     
      <p className="text-xl text-green-800 font-bold mt-2 text-center">{CatagoryName}</p>
      <img className="mt-3 h-3/5 mx-auto w-full mb-7" src={img} alt="" />
      <Link to={`/catagory/${CatagoryName}`}>
        <button className="block w-9/12 rounded-md bg-red-500 mx-auto  mt-2 h-10 text-white font-bold text-xl">
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default ProductCatagoriesData;
