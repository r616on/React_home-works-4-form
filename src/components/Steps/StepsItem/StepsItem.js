import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const StepsItem = ({ date, distance, handleDell, itemId, handleEdit }) => {
  return (
    <div className={"output-item"}>
      <div className={"item-date"}>{date} </div>
      <div className={"item-distance"}> {distance}</div>
      <div className={"item-controls"}>
        <span
          className={"material-icons edit"}
          onClick={() => handleEdit(itemId)}
        >
          edit
        </span>
        <span
          onClick={() => handleDell(itemId)}
          className={"material-icons clear"}
        >
          clear
        </span>
      </div>
    </div>
  );
};

StepsItem.propTypes = {
  date: PropTypes.string,
  distance: PropTypes.string,
  handleDell: PropTypes.func,
  itemId: PropTypes.string,
};

export default StepsItem;
