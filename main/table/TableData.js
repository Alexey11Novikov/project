import React, { useContext } from "react";
import { makeStyles, Paper } from "@cek-js/core-ui/material-ui";

import TablePage from "./TablePage";
import { BuildContext } from "../context/buildContext/buildContext";
import { TableContext } from "../context/tableContext/tableContext";
import Table from "../../components/Table";
import { pagination } from "../../general/sortTable";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: "auto",
    overflowY: "hidden",
  },
}));

const metaTable = { date: "Дата", guid: "Пакет" };

const TableData = () => {
  const classes = useStyles();
  const { rowsData, countRow } = useContext(BuildContext);
  const { page, rowsPerPage } = useContext(TableContext);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table
            arrayData={pagination(page, rowsData, rowsPerPage)}
            infoTable={metaTable}
          />
        </div>
    
      </Paper>
    </div>
  );
};

export default TableData;
