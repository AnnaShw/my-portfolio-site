import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
