import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./desktop.scss";
import StepsForm from "./StepsForm/StepsForm";
import OutputList from "./OutputList/OutputList";

function Steps() {
  const initForm = {
    date: "",
    distance: "",
    distanceEdit: false,
  };

  const [stepArr, setStepArr] = useState([
    { id: uuidv4(), date: "20.07.19", distance: "5.7" },
    { id: uuidv4(), date: "19.07.19", distance: "14.2" },
    { id: uuidv4(), date: "18.07.19", distance: "3.4" },
  ]);

  const [form, setForm] = useState(initForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (form.distance) {
      const index = stepArr.findIndex((item) => item.date === form.date);
      if (index > -1 && !form.distanceEdit) {
        setStepArr((prevArr) => {
          const arr = [...prevArr];
          arr[index].distance = String(+arr[index].distance + +form.distance);
          return arr;
        });
        setForm(initForm);
      } else if (index > -1 && form.distanceEdit) {
        setStepArr((prevArr) => {
          const arr = [...prevArr];
          arr[index].distance = form.distance;
          return arr;
        });
        setForm(initForm);
      } else {
        setStepArr((prevArr) => {
          const arr = [...prevArr];

          arr.push({
            id: uuidv4(),
            date: form.date,
            distance: form.distance,
          });

          arr.sort((a, b) => {
            const aArr = a.date.split(".");
            const bArr = b.date.split(".");
            if (
              new Date(`20${aArr[2]}.${aArr[1]}.${aArr[0]}`) >
              new Date(`20${bArr[2]}.${bArr[1]}.${bArr[0]}`)
            )
              return 1;
            if (
              new Date(`20${aArr[2]}.${aArr[1]}.${aArr[0]}`) <
              new Date(`20${bArr[2]}.${bArr[1]}.${bArr[0]}`)
            )
              return -1;
            return null;
          });

          return arr;
        });
        setForm(initForm);
      }
    }
  };

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleDell = (id) => {
    setStepArr((prevArr) => prevArr.filter((i) => i.id !== id));
  };
  const handleEdit = (id) => {
    const index = stepArr.findIndex((item) => item.id === id);
    setForm({
      date: stepArr[index].date,
      distance: stepArr[index].distance,
      distanceEdit: true,
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
          <OutputList
            items={stepArr}
            handleDell={handleDell}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
