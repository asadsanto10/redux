import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from '../fetaures/transaction/transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionSlice.reducer,
  },
});
