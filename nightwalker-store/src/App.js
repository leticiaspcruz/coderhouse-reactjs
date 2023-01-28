import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListItemsContainer from './components/ListitemsContainer';


function App() {
  return (
    <Router>
      <NavBar />
      <ListItemsContainer />
    </Router>
  );
}

export default App;
