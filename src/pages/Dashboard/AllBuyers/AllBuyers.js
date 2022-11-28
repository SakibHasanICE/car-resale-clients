import React from "react";
import { useLoaderData } from "react-router";

const AllBuyers = () => {
  const allBuyers = useLoaderData();
  return (
    <div className="overflow-x-auto">
      <h3 className="font-bold text-lg mb-3">All Buyers: </h3>
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
          {allBuyers.map((allBuyer, i) => (
            <tr key={allBuyer._id}>
              <th>{i + 1}</th>
              <td>{allBuyer._id}</td>
              <td>{allBuyer.name}</td>
              <td>{allBuyer.email}</td>
            </tr>
          ))}
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

export default AllBuyers;
