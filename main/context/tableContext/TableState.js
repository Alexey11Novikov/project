import React, { useReducer } from 'react';
import { TableContext } from './tableContext';
import { tableReducer } from './tableReducer';
import { SET_ORDER, SET_ORDER_BY, SET_PAGE, SET_ROWS_PER_PAGE } from '../types';

export const TableState = ({ children }) => {
  const initialState = {
    order: 'desc',
    orderBy: 'id',
    page: 0,
    rowsPerPage: 15,
  }

  const [state, dispatch] = useReducer(tableReducer, initialState);

  const setOrder = (order) => {
    dispatch({
      type: SET_ORDER,
      payload: order
    });
  };

  const setOrderBy = (orderBy) => {
    dispatch({
      type: SET_ORDER_BY,
      payload: orderBy
    });
  };

  const setPage = (page) => {
    dispatch({
      type: SET_PAGE,
      payload: page,
    });
  };

  const setRowsPerPage = (rowsPerPage) => {
    dispatch({
      type: SET_ROWS_PER_PAGE,
      payload: rowsPerPage,
    });
  };

  return (
    <TableContext.Provider value={{
      order: state.order, setOrder,
      orderBy: state.orderBy, setOrderBy,
      page: state.page, setPage,
      rowsPerPage: state.rowsPerPage, setRowsPerPage,
    }}>
      {children}
    </TableContext.Provider>
  );
}