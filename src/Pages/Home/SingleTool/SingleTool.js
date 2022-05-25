import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTool = ({ tool }) => {
  const { _id, name, img, description, price, quantity } = tool;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/tool/${id}`);
  };

  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="tool" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">$ {price}</h2>
          <div className="">
            <p className="text-left">{description}</p>
            <p className="text-xl text-left">Available Quantity: {quantity}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => navigateToProductDetail(_id)}
              className="btn btn-primary"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
  );
};

export default SingleTool;
