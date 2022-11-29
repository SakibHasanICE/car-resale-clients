import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContexts";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const url = `https://car-resale-server-tau.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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
            <th>Price</th>
            <th>Phone Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr key={booking._id}>
              <th>{i + 1}</th>
              <td>{booking.userName}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.itemName}</td>
              <td>{booking.price}</td>
              <td>{booking.number}</td>
              <td>{booking.location}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Phone Number</th>
            <th>Location</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyBooking;
