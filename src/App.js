import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes />
    </Router>
  );
}

export default App;
