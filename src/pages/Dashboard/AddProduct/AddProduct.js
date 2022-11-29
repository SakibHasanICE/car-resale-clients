import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Contexts/UserContexts";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const itemCondition = form.itemCondition.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.location.value;
    const yearPurchase = form.yearPurchase.value;
    const originalPrice = form.originalPrice.value;
    const description = form.description.value;
    console.log(originalPrice);
    form.reset();
    const myproducts = {
      userName: name,
      userEmail: email,
      name: productName,
      resalePrice: resalePrice,
      itemCondition: itemCondition,
      mobileNumber: mobileNumber,
      yearPurchase: yearPurchase,
      originalPrice: originalPrice,
      description: description,
      location: location,
    };
    console.log(myproducts);
    fetch("http://localhost:5000/myproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myproducts),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const notify = () => toast("Product Book Successful");
  return (
    <div className="hero  bg-base-200">
      <ToastContainer />
      <div className=" w-11/12">
        <div className="card  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleAddProducts}>
              <label className="label">
                {" "}
                <span className="label-text font-bold">Buyer Name:</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                defaultValue={user?.displayName}
                disabled
                name="name"
                required
              />

              <label className="label">
                {" "}
                <span className="label-text font-bold">Buyer Email:</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                defaultValue={user?.email}
                disabled
                name="email"
                required
              />

              <label className="label">
                <span className="label-text font-bold">Product Name:</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="product name"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Resale Price:</span>
              </label>
              <input
                type="text"
                placeholder="resale price"
                name="resalePrice"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Item Condition:</span>
              </label>
              <input
                type="text"
                placeholder="item condition"
                name="itemCondition"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Mobile Number:</span>
              </label>
              <input
                type="text"
                placeholder="mobile number"
                name="mobileNumber"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Location:</span>
              </label>
              <input
                type="text"
                placeholder="location"
                name="location"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text font-bold">Year of purchase:</span>
              </label>
              <input
                type="text"
                placeholder="year of purchase"
                name="yearPurchase"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Original Price:</span>
              </label>
              <input
                type="text"
                placeholder="original price"
                name="originalPrice"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">Description:</span>
              </label>
              <input
                type="text"
                placeholder="description"
                name="description"
                className="input input-bordered w-full mb-4"
              />
              <input
                onClick={() => notify()}
                className="btn  w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
