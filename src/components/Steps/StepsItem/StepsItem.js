import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const StepsItem = ({ date, distance }) => {
  return (
    <div className={"output-item"}>
      <div className={"item-date"}>{date} </div>
      <div className={"item-distance"}> {distance}</div>
      <div className={"item-controls"}>
        <span className={"material-icons edit"}>edit</span>
        <span className={"material-icons clear"}>clear</span>
      </div>
    </div>
  );
};

StepsItem.propTypes = {};

export default StepsItem;
