import React, { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
} from "@material-ui/core";
import { ADD } from "../../const/actionType";

import { useDispatch } from "react-redux";

const FormOptions = () => {
  const dispatch = useDispatch();
  const [
    isFormData = {
      alertTime: "",
      alertText: "",
      alertLink: "",
      alertType: "",
      alertTitle: "",
    },
    setFormData,
  ] = useState();

  const handleChange = (event) => {
    setFormData({ ...isFormData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    dispatch({
      type: ADD,
      payLoad: { ...isFormData, id: Math.random() },
    });
  };
  const handleFormFields = () => {
    const formOptions = [
      {
        title: "Alert Time Limit",
        name: "alertTime",
        defaultValue: "",
        value: [10, 20, 30, 40, 180],
      },
      {
        title: "Alert Text",
        name: "alertText",
        value: "",
        defaultValue: "",
        helperText: "Alert Text",
      },
      {
        title: "Alert Link",
        name: "alertLink",
        value: "",
        defaultValue: "",
        helperText: "Alert Link",
      },
      {
        title: "Alert Type",
        name: "alertType",
        defaultValue: "",
        value: ["error", "warning", "info", "success"],
      },
      {
        title: "Alert Title",
        name: "alertTitle",
        value: "",
        defaultValue: "",
        helperText: "Alert Title",
      },
    ];
    return formOptions.map(({ title, name, value, ...reset }) => (
      <>
        {name == "alertType" || name == "alertTime" ? (
          <>
            <InputLabel key={`${name}_label`} id="demo-simple-select-label">
              {title}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={name}
              key={`${name}_select`}
              onChange={handleChange}
              {...reset}
            >
              {value.map((_val, index) => (
                <MenuItem key={`${name}_${index}`} value={_val}>
                  {_val}
                </MenuItem>
              ))}
            </Select>
          </>
        ) : (
          <div>
            <TextField
              label={title}
              id="margin-normal"
              name={name}
              key={`${name}_label`}       
              {...reset}
              onChange={handleChange}
            />
          </div>
        )}
      </>
    ));
  };
  return (
    <>
      Form Section
      <div className="container">
        <form noValidate onSubmit={handleSubmit}>
          {handleFormFields()}
          <Button variant="outlined" type="submit" value="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormOptions;
