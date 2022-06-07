import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://sheltered-mountain-12032.herokuapp.com/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Review Add Successfuly");
          reset();
        }
        console.log(result);
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl my-11 font-bold text-primary">Add A Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Enter Your name"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />{" "}
        <br />
        <input
          type="number"
          className="mb-3"
          placeholder="Enter Your Ratings"
          required
          {...register("ratings", { required: true, maxLength: 20 })}
        />{" "}
        <br />
        <textarea
          className="mb-3 bg-gray-300"
          placeholder="comment"
          required
          {...register("reviewText")}
          rows={6}
        />{" "}
        <br />
        <input className="btn btn-primary" type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default AddReview;
