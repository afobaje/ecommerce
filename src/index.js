import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import Description from "./components/Description";

render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        
        <Route path="Dashboard" element={<Dashboard />} />
        {/* <Route path='Cart' element={<Cart/>} /> */}
        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="/Description/:id" element={<Description />} />
        <Route path="*" element={<h3>Not found</h3>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
