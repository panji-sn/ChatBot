import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store'
import ChatBot from './ChatBot'
import './App.css';



function App() {
  return (
    <Provider store={store}>
      <ChatBot></ChatBot>
    </Provider>
  );
}

export default App;
