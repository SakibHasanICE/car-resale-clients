import React from 'react';

const CatagorylistData = ({CatagoryCollection,setBooking}) => {
    const {resaleprice,originalprice,age,location,sellername,picture,registered,companyname} = CatagoryCollection;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
        <figure className='w-2/4'>
          <img className='ml-7' src={picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Company name: {companyname}</h2>
          <p><span className='font-semibold text-xl'>Location:</span> {location}</p>
          
          <p><span className='font-semibold text-xl'>Resale Price:</span> {originalprice}</p>
          <p><span className='font-semibold text-xl'>Original Price:</span> {resaleprice}</p>
          <p><span className='font-semibold text-xl'>Years of use:</span> {age} years</p>
          <p><span className='font-semibold text-xl'>Time of posted:</span> {registered}</p>
          <p><span className='font-semibold text-xl'>Seller name:</span> {sellername}</p>
          <div className="card-actions justify-end">
            <label onClick={()=> setBooking(CatagoryCollection)}
            htmlFor="catagoryModal" className="btn btn-primary"
            >Book now</label>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CatagorylistData;