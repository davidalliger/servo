import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Root() {
  return (
    <App />
  )
}

ReactDOM.render(
  <React>
    <Root />
  </React>,
  document.getElementById('root')
);
