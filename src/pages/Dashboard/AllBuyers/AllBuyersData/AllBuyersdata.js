import React from "react";

const AllBuyersdata = ({ allBuyer, index }) => {
  const { name, email, _id } = allBuyer;
  return (
    <div className="overflow-x-auto">
      <h3 className="font-bold text-lg mb-3">My Orders List: </h3>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{index + 1}</td>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Number</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllBuyersdata;
