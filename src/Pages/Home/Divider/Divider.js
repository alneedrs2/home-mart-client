import React from "react";
import bg1 from "../../../Assets/images/bg-1.jpg";
import bg2 from "../../../Assets/images/bg-2.jpg";

const Divider = () => {
  return (
    <div className="flex flex-col lg:flex-row my-16">
      <div className="grid flex-grow card rounded-box place-items-center">
        <div
          style={{
            background: `url(${bg1})`,
            backgroundSize: "cover",
          }}
          className="card shadow-xl"
        >
          <div className="card-body">
            <h3 className="card-title text-2xl">MAKE YOUR LOOK</h3>
            <h1 className="text-4xl font-bold text-neutral">STYLE & FASHION</h1>
            <p>Your best tools tip are here in this site.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid flex-grow card rounded-box place-items-center">
        <div
          style={{
            background: `url(${bg2})`,
            backgroundSize: "cover",
          }}
          className="card shadow-xl"
        >
          <div className="card-body">
            <h3 className="card-title text-2xl uppercase">Your Best</h3>
            <h1 className="text-4xl font-bold text-neutral uppercase">
              Tools & Parts
            </h1>
            <p>Your best tools tip are here in this site.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
