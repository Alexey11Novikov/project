import React from "react";
import { TableState } from "./context/tableContext/TableState";
import { BuildState } from "./context/buildContext/BuildState";
import { Form } from "./Form";

const Main = () => {
  return (
    <TableState>
      <BuildState>
        <Form />
      </BuildState>
    </TableState>
  );
};

export default Main;
