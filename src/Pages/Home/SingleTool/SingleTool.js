import React from "react";

const SingleTool = ({ tool }) => {
  const { name, img, description, price, quantity } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="tool" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2 class="card-title">$ {price}</h2>
        <div className="">
          <p className="text-left">{description}</p>
          <p className="text-xl text-left">Available Quantity: {quantity}</p>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTool;
