import React from "react";
import "../styles/style.css";

const DisCard = (props) => {
  return (
    <div className="container">
      <div className="row2">
        <div className="col-md-4 inline">
          <div className="img">
            <img src={props.image} className="bg-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisCard;
