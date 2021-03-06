import React from "react";
import profile from "../../Assets/profile.png";

const MyPortfolio = () => {
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
          <div className="text-gray-700 text-base mb-4">
            <p className="flex justify-center">
              <ul className="bg-white rounded-lg w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  Email Address: alneedrs2@gmail.com
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  Education: BSc 1st year, Dinajpur Govt College
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  Skills: Html5, Css3, JavaScript, React Js, MongoDB <br />
                  FrameWork: Bootstrap, Tailwind
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  Three Of My Best Projects Link are: <br />
                  Project 1-{" "}
                  <a
                    className="text-accent"
                    href="https://assignment-eleven-9deb6.web.app/"
                  >
                    Roy & Fashions
                  </a>
                  <br />
                  Project 2-{" "}
                  <a
                    className="text-accent"
                    href="https://glamorous-beauty-shop.netlify.app/"
                  >
                    Glamorous
                  </a>
                  <br />
                  Project 3-{" "}
                  <a
                    className="text-accent"
                    href="https://assignment-ten-d4be8.web.app/"
                  >
                    Aurora Health
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
