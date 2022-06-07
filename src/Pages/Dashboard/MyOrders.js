import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [customer] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (customer) {
      fetch(
        `https://sheltered-mountain-12032.herokuapp.com/order?customer=${customer.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [customer]);
  return (
    <div>
      <h2 className="text-3xl my-3">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Tool</th>
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
                <td>{a.tool}</td>
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
