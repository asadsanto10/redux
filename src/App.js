import React from 'react';
import { Provider } from 'react-redux';
import Blog from './components/Blog';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Blog />
      </div>
    </Provider>
  );
};

export default App;
