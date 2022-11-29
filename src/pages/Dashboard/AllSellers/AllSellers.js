import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const AllSellers = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch("https://car-resale-server-tau.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`https://car-resale-server-tau.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Make Admin Successful");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <h3 className="font-bold text-lg mb-3">All Sellers: </h3>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((allSeller, i) => (
            <tr key={allSeller._id}>
              <th>{i + 1}</th>
              <td>{allSeller._id}</td>
              <td>{allSeller.name}</td>
              <td>{allSeller.email}</td>
              <td>
                {allSeller?.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(allSeller._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-xs btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Number</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllSellers;
