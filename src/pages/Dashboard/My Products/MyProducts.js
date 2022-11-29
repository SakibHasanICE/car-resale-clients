import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContexts";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/myproducts?email=${user?.email}`;

  const { data: myproducts = [] } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <h3 className="font-bold text-lg mb-3">My Orders List: </h3>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Item Name</th>
            <th>Resale Price</th>
            <th>Item Condition</th>
            <th>Year of Purchase</th>
            <th>Original Price</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {myproducts.map((myproduct, i) => (
            <tr key={myproduct._id}>
              <th>{i + 1}</th>
              <td>{myproduct.userName}</td>
              <td>{myproduct.userEmail}</td>
              <td>{myproduct.name}</td>
              <td>{myproduct.resalePrice}</td>
              <td>{myproduct.itemCondition}</td>
              <td>{myproduct.yearPurchase}</td>
              <td>{myproduct.originalPrice}</td>
              <td>{myproduct.description}</td>
              <td>{myproduct.location}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {" "}
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Item Name</th>
            <th>Resale Price</th>
            <th>Item Condition</th>
            <th>Year of Purchase</th>
            <th>Original Price</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyProducts;
