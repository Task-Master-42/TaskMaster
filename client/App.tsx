import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './components/Login.tsx'
import Dashboard from './components/Dashboard.tsx'

const App: React.FC = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>

  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);