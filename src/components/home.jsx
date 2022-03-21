import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [mount, setMounted] = useState();
  let navigate = useNavigate();
  return (
    <div className="home container-fluid p-3 pt-4 pe-0 vh-100 d-flex">
      <div className="index container row align-items-end align-items-md-center pt-5 px-2 pb-3 h-75">
        <div className="col-12 col-lg-6 d-flex  align-items-end justify-content-lg-start justify-content-center">
          <div className="d-flex flex-column   text-container">
            <span className=" fs-6 text-light first-text">
              So, you want to travel to
            </span>
            <span className="  text-light second-text">SPACE</span>
            <span className="  third-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="btn-container">
            <button
              className="btn btn-light rounded-circle  text-dark d-flex justify-content-center align-items-center explore-button"
              onClick={() => {
                navigate("./destination");
                setMounted(!mount);
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
