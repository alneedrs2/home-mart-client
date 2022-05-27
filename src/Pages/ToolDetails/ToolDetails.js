import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useTools from "../../Hooks/useTools";

const ToolDetails = () => {
  const { toolId } = useParams();
  const [tool] = useTools(toolId);
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  const { _id, img, name, price, order, description } = item;
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevCount) => prevCount - 1);
      setTotalPrice(qty * item.price);
    }
  };

  const handleIncrement = () => {
    if (qty < item.quantity) {
      setQty((prevCount) => prevCount + 1);
      setTotalPrice(qty * item.price);
    }
  };

  if (qty < item.order) {
    toast(`add atleast ${item.order} for place order`);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${toolId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      toolId: _id,
      tool: name,
      totalPrice,
      order: qty,
      customer: user.email,
      customerName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Order added");
      });
  };

  return (
    <div
      onSubmit={handlePlaceOrder}
      className="container mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-3"
    >
      <div className="card w-96 bg-base-10 mx-auto shadow-xl">
        <figure>
          <img src={img} alt="tool" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">$ {price}</h2>
          <div className="">
            <p className="text-left">{description}</p>
            <p className="text-xl text-left">
              Available Quantity: {item.quantity}
            </p>
            <p className="text-xl text-left">Minimum Order Quantity: {order}</p>
          </div>
          <div className="input-group justify-center">
            <button
              type="button"
              onClick={handleDecrement}
              className="input-group-text"
            >
              <span className="text-2xl btn btn-secondary">-</span>
            </button>
            <div className="from-control px-5 py-3 bg-base-200 text-center">
              {qty}
            </div>
            <button
              type="button"
              onClick={handleIncrement}
              className="input-group-text"
            >
              <span className="text-2xl btn btn-secondary">+</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <form className="grid grid-cols-1 sm:justify-items-center gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="input input-bordered w-full max-w-xs"
              readOnly
              disabled
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Item</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              defaultValue={item.name}
              className="input input-bordered w-full max-w-xs"
              readOnly
              disabled
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="address"
              required
              autoComplete="off"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="phone"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            disabled={qty < item.order || qty > item.quantity}
            type="submit"
            value="Place Order"
            className="btn btn-secondary input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default ToolDetails;
