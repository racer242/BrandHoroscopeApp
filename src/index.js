import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let element=document.getElementById('root');

console.log(element.getAttribute("oninit"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      id="brandApp"
      onInit={window[element.getAttribute("oninit")]}
      onImage={window[element.getAttribute("onimage")]}
      onImages={window[element.getAttribute("onimages")]}

/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
