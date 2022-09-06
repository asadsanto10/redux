import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AllTransaction from './pages/AllTransaction';
import Home from './pages/Home';
import './style.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allTransactions" element={<AllTransaction />} />
      </Routes>
    </Layout>
  );
}

export default App;
