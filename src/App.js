import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <SearchBar />
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
