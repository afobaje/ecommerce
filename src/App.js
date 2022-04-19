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

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Poppins sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          padding: ".5em",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <span
            style={{
              width: "20%",
              padding: ".5em",
              marginTop: "-1.5em",
            }}
          >
            <h2>Shopify</h2>
          </span>
          <span
            style={{
              width: "30%",
              // padding:'.5em'
            }}
          >
            <input
              type="search"
              name=""
              id=""
              style={{
                width: "100%",
                padding: "1em",
                marginTop: "1em",
                borderRadius: "5px",
                border: "1px solid gray",
              }}
            />
          </span>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              justifyContent: "space-evenly",
              width: "50%",
            }}
          >
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                BEST SELLERS
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                ALL UNDER 30s
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                SIGN UP
              </a>
            </li>
            <li>ADD TO CART</li>
          </ul>
        </nav>
      </header>
      <Description/>
     <Outlet/>
    </div>
  );
}

export default App;
