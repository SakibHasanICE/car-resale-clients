import React from "react";
import { useLoaderData } from "react-router-dom";
import CatagorylistData from "../CatagorylistData/CatagorylistData";

const CatagoryList = () => {
  const CatagoryCollections = useLoaderData();

  console.log(CatagoryCollections);
  return (
    <div>
      <div className="card gap-9 mx-5 mt-5 grid grid-cols-1 lg:grid-cols-2">
        {CatagoryCollections.map((CatagoryCollection) => (
          <CatagorylistData
            key={CatagoryCollection._id}
            CatagoryCollection={CatagoryCollection}
          ></CatagorylistData>
        ))}
        ;
      </div>
    </div>
  );
};

export default CatagoryList;
