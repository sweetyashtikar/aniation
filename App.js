import React from "react";
import { BrowserRouter as Router, Navigate, Route } from 'react-router-dom';
import Drawer from "./components/Drawer";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css'
import { Switch } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigate>
          <Route path="/drawer" exact component={Drawer} />
          <Route path="/" exact component={Home} />
          <Route path="about" exact component={About} />
          <Route path="services" exact component={Services} />
          <Route path="contact" exact component={Contact} />
        </Navigate>
      </Router>
    </div>
  );
}
