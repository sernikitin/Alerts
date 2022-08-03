import React from "react";
import AlertComponent from "./index";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { REMOVE } from "../../const/actionType";
import "./style.css";

const AlertManager = () => {
  const { alertInfo } = useSelector(({ alert }) => alert);
  const dispatch = useDispatch();

  const handleOneDelete = (idToRemove) => {
    dispatch({
      type: REMOVE,
      payLoad: idToRemove,
    });
  };

  return (
    <>
      {!isEmpty(alertInfo) ? (
        <Stack
          sx={{ width: "35%", position: "absolute", right: "5px", top: "16px" }}
          spacing={alertInfo.length}
          id={`Stack_id`}
          key={`alertInfo`}
        >
          {alertInfo.map((data) => (
            <AlertComponent
              {...data}
              handleOneDelete={handleOneDelete}
              key={`alert_${data.id}`}
              id={data.id}
            />
          ))}
        </Stack>
      ) : (
        ""
      )}
    </>
  );
};
export default AlertManager;
