import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";
import StepsItem from "../StepsItem/StepsItem";

const OutputList = ({ items, handleDell, handleEdit }) => {
  return (
    <div className={"output"}>
      <div className={"output-title"}>
        <span className="output-title-item">Дата (ДД.ММ.ГГ)</span>
        <span className="output-title-item">Пройденно км</span>
        <span className="output-title-item">Действия</span>
      </div>
      <div className={"output-body"}>
        {items.map((item) => {
          return (
            <StepsItem
              key={item.id}
              itemId={item.id}
              date={item.dateVie}
              distance={item.distance}
              handleDell={handleDell}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

OutputList.propTypes = {
  items: PropTypes.array,
  handleDell: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default OutputList;
