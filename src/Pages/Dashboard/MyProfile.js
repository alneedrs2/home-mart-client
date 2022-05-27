import React from "react";
import profile from "../../Assets/profile.png";

const MyProfile = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg" src={profile} width={400} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-center text-xl font-medium mb-2">
            Name: Alneed Roy Shuvro
          </h5>
          <h6 className="text-gray-900 text-center text-xl mb-2">
            Email: alneedrs2@gmail.com
          </h6>
          <h6 className="text-gray-900 text-center text-xl mb-2">
            LinkedIn Profile Link:{" "}
            <a
              className="text-accent"
              href="https://www.linkedin.com/in/alneed-roy-shuvro-823a07228/"
            >
              LinkedIn Profile
            </a>
          </h6>

          <div className="text-gray-700 text-base mb-4">
            <form className="grid grid-cols-1 sm:justify-items-center gap-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Education"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
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
                type="submit"
                value="Update"
                className="btn btn-secondary input-bordered w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
