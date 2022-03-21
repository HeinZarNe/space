import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import MediaQuery from "react-responsive";
const Crew = () => {
  const [data, setData] = useOutletContext();
  const [isStart, setIsStart] = useState(true);
  const [currentNum, setCurrentNum] = useState(0);
  const labelClass = "bg-secondary rounded-circle";
  return (
    <div className="crew row vh-100">
      <div className="left col-12 col-lg-6 px-0 d-flex flex-column justify-content-end">
        <MediaQuery minWidth={500}>
          <div className="header text-start text-light fs-5 w-100 font-monospace">
            <span className="text-secondary  me-2">02</span>MEET YOUR CREW
          </div>
        </MediaQuery>
        <div className="">
          <span className="text-white-50 text-uppercase fw-light d-block fs-4 mb-2">
            {data && data.crew[currentNum].role}
          </span>
          <span className="text-light text-uppercase d-block fs-2 mb-4">
            {data && data.crew[currentNum].name}
          </span>
          <span className="bio fs-6 text-secondary">
            {data && data.crew[currentNum].bio}
          </span>
        </div>
        <MediaQuery minWidth={500}>
          <div className="tabs">
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
                  className={isStart ? labelClass + " actived" : labelClass}
                  htmlFor="option-one"
                ></label>
                <input
                  type="radio"
                  id="option-two"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(1);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-two"></label>
                <input
                  type="radio"
                  id="option-three"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(2);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-three"></label>
                <input
                  type="radio"
                  id="option-four"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(3);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-four"></label>
              </div>
            </form>
          </div>
        </MediaQuery>
      </div>
      <div className="right col-12 col-lg-6 d-flex align-items-center justify-content-center flex-column ">
        <MediaQuery maxWidth={500}>
          <div className="header text-start text-light fs-5 w-100 font-monospace">
            <span className="text-secondary  me-2">02</span>MEET YOUR CREW
          </div>
        </MediaQuery>
        <div className="img-holder d-flex align-items-end ">
          <img
            className="img-fluid"
            src={data && data.crew[currentNum].images.png}
            alt=""
          />
        </div>
        <MediaQuery maxWidth={500}>
          <div className="tabs">
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
                  className={isStart ? labelClass + " actived" : labelClass}
                  htmlFor="option-one"
                ></label>
                <input
                  type="radio"
                  id="option-two"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(1);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-two"></label>
                <input
                  type="radio"
                  id="option-three"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(2);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-three"></label>
                <input
                  type="radio"
                  id="option-four"
                  name="selector"
                  onClick={() => {
                    setCurrentNum(3);
                    setIsStart(false);
                  }}
                />
                <label className={labelClass} htmlFor="option-four"></label>
              </div>
            </form>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Crew;
