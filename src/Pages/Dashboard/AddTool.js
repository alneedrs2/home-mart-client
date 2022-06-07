import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTool = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "https://sheltered-mountain-12032.herokuapp.com/tool";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product added successfully");
          reset();
        }
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Product name"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("name", {
              required: {
                value: true,
                message: "name is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            required
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="quantity"
            className="input input-bordered w-full max-w-xs"
            required
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
            })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered w-full max-w-xs"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
        </div>

        <input
          className="btn w-96 btn-primary text-white"
          type="submit"
          value="ADDED Tool"
        />
      </form>
    </div>
  );
};

export default AddTool;
