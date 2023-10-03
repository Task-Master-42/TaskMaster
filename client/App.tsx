import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css' // includes tailwind

function App(): React.JSX.Element {
  return <h1 className=''>Hello world</h1>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);