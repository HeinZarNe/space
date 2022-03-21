import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Technoogy = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [data, setData] = useOutletContext();
  const labelClass =
    "bg-none my-4 border text-light border-secondary border-1 d-flex justify-content-center align-items-center rounded-circle";
  return (
    <div className="tech row vh-100">
      <div className="header col-12 text-light fs-5 w-100 font-monospace">
        <span className="text-secondary me-2">03</span>SPACE LAUNCH 101
      </div>
      <div className="content-shell d-flex pe-0">
        <div className="left col-12 col-lg-6 px-0 d-flex flex-column justify-content-center">
          <div className="d-flex f-item justify-content-between align-items-center">
            <div className="tabs me-5">
              <form>
                <div className="radio-group m-0 border-0 rounded-0">
                  <input
                    type="radio"
                    id="option-one"
                    name="selector"
                    onClick={() => {
                      setCurrentNum(0);
                      setIsStart(false);
                    }}
                  />
                  <label
                    className={!isStart ? labelClass : labelClass + " actived"}
                    htmlFor="option-one"
                  >
                    1
                  </label>
                  <input
                    type="radio"
                    id="option-two"
                    name="selector"
                    onClick={() => {
                      setCurrentNum(1);
                      setIsStart(false);
                    }}
                  />
                  <label className={labelClass} htmlFor="option-two">
                    2
                  </label>
                  <input
                    type="radio"
                    id="option-three"
                    name="selector"
                    onClick={() => {
                      setCurrentNum(2);
                      setIsStart(false);
                    }}
                  />
                  <label className={labelClass} htmlFor="option-three">
                    3
                  </label>
                </div>
              </form>
            </div>
            <div className="text-shell">
              <span className="text-white-50 text-uppercase  d-block fs-6 ">
                THE TECHNOLOGY...
              </span>
              <span className="text-light text-uppercase d-block fs-1 mb-2">
                {data && data.technology[currentNum].name}
              </span>
              <span className="bio fs-6 text-secondary w-50 ">
                {data && data.technology[currentNum].description}
              </span>
            </div>
          </div>
        </div>

        <div className="right col-12 col-lg-6 d-flex align-items-center justify-content-end pe-0">
          <div className="img-holder d-flex align-items-end ">
            <img
              className="img-fluid portrait"
              src={data && data.technology[currentNum].images.portrait}
              alt=""
            />
            <img
              className="img-fluid landscape"
              src={data && data.technology[currentNum].images.landscape}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technoogy;
