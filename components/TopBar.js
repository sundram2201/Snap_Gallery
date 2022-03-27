import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Data/Data";
import DisCard from "./DisCard";
import "../index.css";

const TopBar = (props) => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        className="block"
        placeholder="Select your category E.g. Mountains, Birds, Animals etc..."
      />
      {Data.filter((val) => {
        if (searchItem == "") {
          return val;
        } else if (
          val.category.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <>
            <div className="col-md-4 inline">
              <img src={val.image} className="bg-image" />
              <h5 className="cardName">
                <b>{val.category.toUpperCase()}</b>
              </h5>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TopBar;
