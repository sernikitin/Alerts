import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { isEmpty } from "lodash";

const AlertComponent = (props) => {
  const {
    alertLink,
    alertText,
    alertTime,
    alertTitle,
    alertType,
    id,
    handleOneDelete,
  } = props;
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleOneDelete(id);
    }, alertTime * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [id]);

  return (
    <Alert
      severity={alertType}
      // action={
      //   <IconButton
      //     aria-label="close"
      //     color="inherit"
      //     size="small"
      //     // onClick={() => {
      //     //   handleOneDelete(id);
      //     // }}
      //   >
      //     <CloseIcon fontSize="inherit" />
      //   </IconButton>
      // }
    >
      <AlertTitle>{alertTitle}</AlertTitle>
      {alertText}{" "}
      {!isEmpty(alertLink) ? (
        <a href={`//${alertLink}`} target="_blank">
          click here
        </a>
      ) : (
        ""
      )}
    </Alert>
  );
};

export default AlertComponent;
