import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutMe from "./Pages/AboutMe";
import MenuBar from './components/MenuBar/menuBar';
import WorkHistory from "./Pages/WorkHistory";


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/workHistory" element={<WorkHistory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
