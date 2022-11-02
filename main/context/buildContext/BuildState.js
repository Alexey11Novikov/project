import React, { useState, useContext } from "react";
import axios from "axios";
import { FilterContext } from "../filterContext/filterContext";
import { TableContext } from "../tableContext/tableContext";
import { BuildContext } from "./buildContext";

export const BuildState = ({ children }) => {
  const [rowsData, setRowsData] = useState();
  const [employee, setEmployee] = useState();

  const fetchRows = async () => {
    let urlHost = "/get/document";
    const res = await axios.get(urlHost);
    if(res.data!==null)  setRowsData(res.data);
  };

  const getEmployee = async () => {
    const res = await axios.get(urlHost);
    if(res.data!==null) setRowsData(res.data);
  }
  

  return (
    <BuildContext.Provider value={{ rowsData, fetchRows }}>
      {children}
    </BuildContext.Provider>
  );
};
