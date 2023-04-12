import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { components } from "./data-components";
import "./App.css";


const App = () => {
  return (
    <div className="container">
      <div className="app">
        <ul>
          {components.map((item) => (
            <li><Link to={item.link}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
      <Routes>
        {components.map((item) => 
          <Route path={item.link} element={item.component}/>
        )}
      </Routes>
    </div>
  );
};

export default App;
