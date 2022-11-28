import React from "react";

const AddProduct = () => {
  return (
    <div className="hero  bg-base-200">
      <div className=" w-11/12">
        <div className="card  shadow-2xl bg-base-100">
          <div className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name:</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Resale Price:</span>
              </label>
              <input
                type="text"
                placeholder="resale price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Item Condition:</span>
              </label>
              <input
                type="text"
                placeholder="item condition"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Mobile Number:</span>
              </label>
              <input
                type="text"
                placeholder="mobile number"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Location:</span>
              </label>
              <input
                type="text"
                placeholder="location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Year of purchase:</span>
              </label>
              <input
                type="text"
                placeholder="year of purchase"
                className="input input-bordered"
              />
            </div>
             
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Original Price:</span>
              </label>
              <input
                type="text"
                placeholder="original price"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Description:</span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input input-bordered"
              />
            </div>
           
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
