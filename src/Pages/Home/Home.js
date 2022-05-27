import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import Footer from "../../Shared/Footer/Footer";
import AllReview from "./AllReview/AllReview";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Divider from "./Divider/Divider";
import Tools from "./Tools/Tools";

const Home = () => {
  const [review, setReview] = useReview();

  return (
    <div>
      <Banner></Banner>
      <Divider></Divider>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <div className="my-5">
        <h1 className="text-4xl mt-5 text-center">Most Valuable Reviews</h1>
        {review.slice(0, 3).map((item) => (
          <AllReview key={item.id} item={item}></AllReview>
        ))}
        <Link
          to={"/reviews"}
          className="my-5 ml-10 py-2 px-4 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-opacity-75"
        >
          See All Reviews
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
