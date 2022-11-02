import React, { useContext } from "react";
import {
  TableRow,
  TableHead,
  TableCell,
  TableSortLabel,
} from "@cek-js/core-ui/material-ui";
import { TableContext } from "../context/tableContext/tableContext";

const TableHeader = () => {
  const { orderBy, order, setOrderBy, setOrder } = useContext(TableContext);


  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
        Наименование документа
        </TableCell>
        <TableCell align="center">
        Количество заявок
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
