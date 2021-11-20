import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./desktop.scss";
import StepsForm from "./StepsForm/StepsForm";
import OutputList from "./OutputList/OutputList";

function Steps() {
  const [stepArr, setStepArr] = useState([
    { id: uuidv4(), date: "20.07.2019", distance: 5.7 },
    { id: uuidv4(), date: "19.07.2019", distance: 14.2 },
    { id: uuidv4(), date: "18.07.2019", distance: 3.4 },
  ]);

  const [form, setForm] = useState({
    date: "",
    distance: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setStepArr((prevArr) => {
      return prevArr.concat({
        id: uuidv4(),
        date: form.date,
        distance: form.distance,
      });
    });
  };

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  return (
    <div className={"Steps"}>
      <div className={"Steps-row"}>
        <StepsForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <div className={"Steps-output"}>
          <OutputList items={stepArr} />
        </div>
      </div>
    </div>
  );
}

export default Steps;
