import React, { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Dashboard";
import Cart from "./Cart";
import Sales from "./Sales";
// import AddProduct from "./AddProduct";
import Items from "./Items";
import Product from "./Description";
import { store } from "../store";
import { Provider } from "react-redux";
import App from "../App";
// import Layout from "./Layout";

export const Universal = createContext();
const Global = () => {
  const [val, setVal] = useState([]);
  const [count, setCount] = useState(1);
  const [productcount, setProductcount] = useState([]);
  const [show,setShow]=useState(false)

  return (
    <>
      <Universal.Provider value={{ val, setVal,productcount,setProductcount,count,setCount,show,setShow }}>
        <Router>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="Cart" element={<Cart />} />
              <Route index element={<Cart />} />
              {/* <Route path="AddProduct" element={<AddProduct />} /> */}
              {/* <Route path="Layout" element={<Layout />} /> */}
              <Route path="Items" element={<Items />} />
              <Route path='Sales' element={<Sales/>}/>
              <Route path="/Product/:id" element={<Product />} />
              <Route path="Admin" element={<Admin />} />
              <Route path="*" element={<h3>Not found</h3>} />
            </Routes>
          </Provider>
        </Router>
      </Universal.Provider>
    </>
  );
};

export default Global;
