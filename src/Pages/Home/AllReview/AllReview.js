import React from "react";

const AllReview = (props) => {
  const { name, reviewText, ratings } = props.item;

  return (
    <div className="my-5">
      <div className="text-2xl mx-10 rounded-lg border border-slate-600 px-5 py-5">
        <h1>{name}</h1>
        <h3 className="my-1">Ratings: {ratings}</h3>
        <p className="my-2">{reviewText}</p>
        <div className="d-flex my-3">
            <button className="mr-5 text-accent">Like</button>
            <button className="text-primary">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default AllReview;
