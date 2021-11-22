import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./desktop.scss";
import StepsForm from "./StepsForm/StepsForm";
import OutputList from "./OutputList/OutputList";
import { format } from "date-fns";

class StepItem {
  constructor(date, distance) {
    this.id = uuidv4();
    this.date = date;
    this.dateVie = format(new Date(date), "dd.MM.yy");
    this.distance = distance;
  }
}

function Steps() {
  const initForm = {
    date: "",
    distance: "",
    distanceEdit: false,
  };

  const [stepArr, setStepArr] = useState([
    new StepItem("2019-07-20", 5.7),
    new StepItem("2019-07-19", 14.2),
    new StepItem("2019-07-18", 3.4),
  ]);

  const [form, setForm] = useState(initForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.distance) {
      const index = stepArr.findIndex((item) => item.date === form.date);
      //// Если такая дата уже существует и не редактирование то записываем новое значение
      if (index > -1 && !form.distanceEdit) {
        setStepArr((prevArr) => {
          const arr = [...prevArr];
          console.log(arr);
          console.log("Начальное значение " + arr[index].distance);
          console.log("Новое значение  " + form.distance);
          //
          arr[index].distance = +arr[index].distance + +form.distance;
          //
          console.log("результат " + arr[index].distance);
          return arr;
        });
        setForm(initForm);
        ////////
      } else if (index > -1 && form.distanceEdit) {
        setStepArr((prevArr) => {
          const arr = [...prevArr];
          arr[index].distance = form.distance;
          return arr;
        });
        setForm(initForm);
        ///////
      } else {
        setStepArr((prevArr) => {
          const arr = [...prevArr];
          arr.push(new StepItem(form.date, form.distance));
          arr.sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) return 1;
            if (new Date(a.date) < new Date(b.date)) return -1;
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
    // console.log(format(new Date(stepArr[index].date), "yyyy-MM-dd"));
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
