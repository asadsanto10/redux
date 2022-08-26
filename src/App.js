import React from 'react';
import { Provider } from 'react-redux';
import CompletedTodoList from './components/CompletedTodoList';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="grid place-items-center bg-blue-100 px-6 font-sans h-screen">
          <Navbar />

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <Header />
            <hr className="mt-4" />

            <TodoList />

            <hr className="mt-4" />

            <Footer />
          </div>

          <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-4">
            <h2>Completed Todo</h2>
            <CompletedTodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
