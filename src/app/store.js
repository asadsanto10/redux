import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../fetaures/pagination/paginationSlice';
import transactionSlice from '../fetaures/transaction/transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionSlice.reducer,
    pagination: paginationSlice.reducer,
  },
});
