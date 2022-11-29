import React from "react";
import img from "../../images/mycomimg.avif";
const MyComponent = () => {
  return (
    <div>
      <div>
        <p className="mt-7 text-3xl text-cyan-500 underline font-bold mb-7 text-center ">
          About Us
        </p>
        <div className="container w-11/12 mx-auto border-slate-400 border-2 p-3 rounded-md">
          <div className=" grid grid-cols-2 ">
            <img src={img} alt="" />
            <div className="flex  flex-col justify-center items-center">
              <p className=" italic text-3xl text-cyan-500 font-bold mb-7 ">
                Since 1987, at your service
              </p>
              <p className="text-lg font-bold text-justify ml-5">
                After so many years of service we gain lot of experience. Our
                Car resale company is one of the best company in th entire world
                we are doing our best to give the best experience to our
                customers.Best place to buy a secon hand and brand new car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
