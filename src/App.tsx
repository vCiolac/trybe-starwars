import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
    </Routes>
  );
}

export default App;
