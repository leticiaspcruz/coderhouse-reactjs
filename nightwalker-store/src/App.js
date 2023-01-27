import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListItems from './components/ListItems';


function App() {
  return (
    <Router>
      <NavBar />
      <ListItems />
    </Router>
  );
}

export default App;
