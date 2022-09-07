/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  // eslint-disable-next-line prettier/prettier
  getTransaction
} from './transactionAPI';

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: '',
  editing: {},
  editAllTransaction: false,
};

// async thunk
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async ({ search, type }) => {
    const transaction = await getTransaction(search.toLowerCase(), type);
    return transaction;
  }
);

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

export const changeTransaction = createAsyncThunk(
  'transactions/changeTransactions',
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);
export const removeTransaction = createAsyncThunk('transactions/removeTransactions', async (id) => {
  const transaction = await deleteTransaction(id);
  return transaction;
});

// create slice

const transactionSlice = createSlice({
  initialState,
  name: 'transactions',
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
    editOthersPage: (state, action) => {
      state.editAllTransaction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.transactions = [];
        state.error = action.error.message;
      })
      .addCase(createTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(changeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.transactions.findIndex((t) => t.id === action.payload.id);
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(removeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        // console.log(action);
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter((t) => t.id !== action.meta.arg);
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { editActive, editInActive, editOthersPage } = transactionSlice.actions;
export default transactionSlice;
