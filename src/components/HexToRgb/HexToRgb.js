import React, { useState, useEffect, useRef } from "react";
import "./desktop.scss";

const HexToRgb = (props) => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("#Привет");
  const backgroundColor = useRef();

  const handelChangeColor = (e) => {
    setColor(e.target.value);
  };
  useEffect(() => {
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
            result[3],
            16
          )})`
        : null;
    }
    if (color.length === 7 && color.match(/#[a-f0-9]{6}\b/gi)) {
      setTextColor(hexToRgb(color));
      backgroundColor.current.style.backgroundColor = color;
    } else if (color.length > 6 && !color.match(/#[a-f0-9]{6}\b/gi)) {
      setTextColor("#Ошибка");
      backgroundColor.current.style.backgroundColor = "rgb(240, 104, 26)";
    }
  }, [color]);

  return (
    <div className={"HexToRgb"} ref={backgroundColor}>
      <form className={"HexToRgb-row"}>
        <div>
          <input
            className={"HexToRgb-input"}
            id="name"
            name="name"
            value={color}
            onChange={handelChangeColor}
            placeholder="Введите цвет"
          />
          <label className={"HexToRgb-label"} htmlFor="name">
            {textColor}
          </label>
        </div>
      </form>
    </div>
  );
};

export default HexToRgb;
