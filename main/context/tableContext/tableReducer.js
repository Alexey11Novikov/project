import { SET_ORDER, SET_ORDER_BY, SET_PAGE, SET_ROWS_PER_PAGE } from "../types";

const handlers = {
  [SET_ORDER]: (state, { payload }) => ({ ...state, order: payload }),
  [SET_ORDER_BY]: (state, { payload }) => ({ ...state, orderBy: payload }),
  [SET_PAGE]: (state, { payload }) => ({ ...state, page: payload }),
  [SET_ROWS_PER_PAGE]: (state, { payload }) => ({ ...state, rowsPerPage: payload }),
  DEFAULT: (state) => state
};

export const tableReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
