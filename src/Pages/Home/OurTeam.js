import React from "react";

const OurTeam = () => {
  return (
    <div>
      <h1 className="text-center my-16 font-bold text-2xl text-primary">
        Our Respectfull Team Says
      </h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "We are here to serve you the best"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Anna Morian</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Your Order Our Responsibility"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Teresa May</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "We are commit to give you the best. Keep in touch!"
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Kate Allise</p>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
