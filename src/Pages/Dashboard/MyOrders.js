import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [customer] = useAuthState(auth);

  useEffect(() => {
    if (customer) {
      fetch(`http://localhost:5000/order?customer=${customer.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [customer]);
  return (
    <div>
      <h2 className="text-3xl my-3">My Orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Tool Id</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.customerName}</td>
                <td>{a._id}</td>
                <td>{a.order}</td>
                <td>{a.totalPrice}</td>
                <td>{a.customer}</td>
                <td>{a.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
