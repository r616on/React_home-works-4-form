import React, { useState } from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const StepsForm = (props) => {
  const { form, onChange, onSubmit, btnOnClik } = props;

  return (
    <form className="Steps-form" onSubmit={onSubmit}>
      <div className="form-item">
        <label className="lable" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          type="text"
          id="date"
          name="date"
          className={"input-date input-item"}
          value={form.name}
          onChange={onChange}
        />
      </div>
      <div className="form-item">
        <label className="lable" htmlFor="distance">
          Пройденно км
        </label>
        <input
          type="text"
          id="distance"
          name="distance"
          className={"input-distance input-item"}
          value={form.name}
          onChange={onChange}
        />
      </div>

      <button className={"input-button input-item"}>OK</button>
    </form>
  );
};

StepsForm.propTypes = {};

export default StepsForm;
