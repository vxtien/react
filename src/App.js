import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Form from "./Components/Form";
import TodoApp from "./TodoList/TodoApp";
import ExampleState from "./Components/ExampleState";
import Cars from "./Components/Cars";
import ColorBox from "./Components/ColorBox";
import Counter from "./Components/Counter";
import FeedbackForm from "./Components/FeedbackForm";
import Form2 from "./Components/Form2";
import TrafficLight from "./Components/TrafficLight";
import MyButton from "./Components/MyButton";
import MyForm from "./Components/MyForm";
import Profile from "./Components/Profile";
import RequestTracker from "./Components/RequestTracker";
import ShoppingList from "./Components/ShopppingList";
import AppToolBar from "./Components/ToolBar";
import LightSwitch from "./Components/LightSwitch";
import Gallery from "./Components/UsersList";
import MyApp1 from "./Components/UseState";
import MyApp from "./example/MyApp";
import HomePage from "./Components/HomePage";
import TicTacToe from "./TicTacToe/TicTacToe";
import EditPofile from "./Managin State/EditProfile";


const App = () => {
  return (
    <div className="main">
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/todo-app">Todo App</Link>
          </li>
          <li>
            <Link to="/example-state">Example State</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/color-box">Color Box</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/feedback-form">Feedback Form</Link>
          </li>
          <li>
            <Link to="/form2">Form2</Link>
          </li>
          <li>
            <Link to="/traffic-light">Traffic Light</Link>
          </li>
          <li>
            <Link to="/my-button">My Button</Link>
          </li>
          <li>
            <Link to="/my-form">My Form</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/request-tracker">Request Tracker</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/app-tool">App Tool</Link>
          </li>
          <li>
            <Link to="/light-switch">Light Switch</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/my-app1">My App 1</Link>
          </li>
          <li>
            <Link to="/my-app">My App</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </li>
          
        </ul>
      </div>
      
      <EditPofile/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/form" element={<Form />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/example-state" element={<ExampleState />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/color-box" element={<ColorBox />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/my-button" element={<MyButton />} />
        <Route path="/my-form" element={<MyForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request-tracker" element={<RequestTracker />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/app-tool" element={<AppToolBar />} />
        <Route path="/light-switch" element={<LightSwitch />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/my-app1" element={<MyApp1 />} />
        <Route path="/my-app" element={<MyApp />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />



      </Routes>
    </div>
  );
};

export default App;
