import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.scss';
import Header from './components/Header';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
