import React from "react";
import { useLoaderData } from "react-router";
import AllBuyersdata from "./AllBuyersData/AllBuyersdata";

const AllBuyers = () => {
    const allBuyers=useLoaderData();
  return (
    <div>
      <div className="card gap-9 mx-5 mt-5 grid grid-cols-1 lg:grid-cols-1">
        {allBuyers.map((allBuyer,i) => (
          <AllBuyersdata
            key={allBuyer._id}
            allBuyer={allBuyer}
            index={i}
          ></AllBuyersdata>
        ))};
      </div>
    </div>
  );
};

export default AllBuyers;
