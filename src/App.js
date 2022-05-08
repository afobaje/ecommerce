import logo from "./logo.svg";
import "./App.css";
// import Products from "./components/Products";
import Todo from "./components/Todo";
import ProductList from "./components/ProductList";
import Dashboard from "./components/Dashboard";
import Description from "./components/Description";
// import Cart from "./components/Cart";
// import Modal from "./components/Modal";
import { Link,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Poppins sans-serif",
      }}
    >
     
      
     <Outlet/>
     
    </div>
  );
}

export default App;
