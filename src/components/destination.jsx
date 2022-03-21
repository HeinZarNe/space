import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Destination = (props) => {
  const [currentNum, setCurrentNum] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [data, setData] = useOutletContext();

  useEffect(() => {});

  return (
    <div className="destination">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header">
            <span className="text-white fs-5 ">
              <span className="text-secondary me-2">01</span>PICK YOUR
              DESTINATION
            </span>
          </div>

          <div className="shell d-flex align-items-center pt-1 p-5 justify-content-between container">
            <div className="col-lg-6 col-12 img-shell left">
              <div className="img-holder mx-auto">
                <img
                  className="img-fluid"
                  src={data && data.destinations[currentNum].images.png}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 text-shell col-12 right">
              <div className="links">
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
                      htmlFor="option-one"
                      className={isStart ? "actived" : ""}
                    >
                      MOON
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
                    <label htmlFor="option-two">MARS</label>
                    <input
                      type="radio"
                      id="option-three"
                      name="selector"
                      onClick={() => {
                        setCurrentNum(2);
                        setIsStart(false);
                      }}
                    />
                    <label htmlFor="option-three">EUROPA</label>
                    <input
                      type="radio"
                      id="option-four"
                      name="selector"
                      onClick={() => {
                        setCurrentNum(3);
                        setIsStart(false);
                      }}
                    />
                    <label htmlFor="option-four">TITAN</label>
                  </div>
                </form>
              </div>
              <span className="name text-light ">
                {data && data.destinations[currentNum].name}
              </span>
              <span className="description text-secondary mb-3 d-block">
                {data && data.destinations[currentNum].description}
              </span>
              <hr className="text-secondary mb-3" />
              <div className="d-flex justify-content-start detail-shell  align-items-center">
                <div className="d-flex flex-column me-5 first-item justify-content-center align-items-start ">
                  <span className=" text-secondary fs-6">AVG. DISTANCE</span>
                  <span className="distance fs-4 text-white">
                    {data &&
                      data.destinations[currentNum].distance.toUpperCase()}
                  </span>
                </div>
                <div className="d-flex flex-column  second-item justify-content-center align-items-start ">
                  <span className=" text-secondary fs-6">EST. TRAVEL TIME</span>
                  <span className="distance fs-4 text-white">
                    {data && data.destinations[currentNum].travel.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
