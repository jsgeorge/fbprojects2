import React from "react";
import Carousel from "./carousel";

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <div
        className="jumbotron"
        style={{
          height: `${window.innerHeight}px`,
          overflow: "hidden"
        }}
      >
        <div className="container">
          <div className="jumboText">
            <h3 className="display-3">
              Your first step to better way of running your business
            </h3>

            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
