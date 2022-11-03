import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { BuildContext } from "./context/buildContext/buildContext";

export const Form = () => {
  const { fetchRows, fetchRowsChart, deviceList } = useContext(BuildContext);

  const onSubmit = () => {
    //post
  };

  return (
    <>
      <Select value={statusDevice} onChange={(e) => handleOnChange(e)}>
        {deviceList &&
          deviceList.map((row, index) => (
            <MenuItem value={row.id} key={index}>
              {row.name}
            </MenuItem>
          ))}
      </Select>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Отправить
      </Button>
    </>
  );
};
