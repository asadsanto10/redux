import React from 'react';
import { useSelector } from 'react-redux';
import AllTransactions from '../components/AllTransaction/AllTransactions';
import Balance from '../components/Balance';
import Form from '../components/Form';

const AllTransaction = () => {
  const { editAllTransaction } = useSelector((state) => state.transactions);

  return (
    <>
      <Balance />
      {editAllTransaction && <Form />}
      <AllTransactions />
    </>
  );
};

export default AllTransaction;
