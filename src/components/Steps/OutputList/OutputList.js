import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";
import StepsItem from "../StepsItem/StepsItem";

const OutputList = ({ items }) => {
  console.log(items);
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
              date={item.date}
              distance={item.distance}
            />
          );
        })}
      </div>
    </div>
  );
};

OutputList.propTypes = {};

export default OutputList;
