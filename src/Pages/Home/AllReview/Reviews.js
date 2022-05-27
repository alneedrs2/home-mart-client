import React from "react";
import useReview from "../../../Hooks/useReview";
import AllReview from "./AllReview";

const Reviews = () => {
  const [review, setReview] = useReview();
  return (
    <div>
      <h1 className="text-center text-primary text-5xl my-12">
        What Our Customers Says
      </h1>
      <h3 className="my-5 text-3xl mx-10">
        All Reviews : <span className="text-primary">{review.length}</span>
      </h3>
      {review.map((item) => (
        <AllReview key={item.id} item={item}></AllReview>
      ))}
    </div>
  );
};

export default Reviews;
