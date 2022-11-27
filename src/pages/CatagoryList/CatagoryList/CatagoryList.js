import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CatagorylistData from "../CatagorylistData/CatagorylistData";
import CatagoryModal from "../CatagoryModal/CatagoryModal";

const CatagoryList = () => {
  const CatagoryCollections = useLoaderData();
  const [ booking, setBooking ] = useState(null);

  return (
    <div>
      <div className="card gap-9 mx-5 mt-5 grid grid-cols-1 lg:grid-cols-1">
        {CatagoryCollections.map((CatagoryCollection) => (
          <CatagorylistData
            key={CatagoryCollection._id}
            CatagoryCollection={CatagoryCollection}
            setBooking={setBooking}
          ></CatagorylistData>
        ))}
        ;
         { booking && <CatagoryModal booking={booking}></CatagoryModal>}
      </div>
    </div>
  );
};

export default CatagoryList;
