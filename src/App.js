import logo from "./logo.svg";
import "./App.css";
// import Products from "./components/Products";
import Todo from "./components/Todo";
import ProductList from "./components/ProductList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="http://">Dashboard</a></li>
          <li><a href="http://">Orders</a></li>
        </ul>
      </nav>
      <Dashboard/>
      <ProductList/>
    </div>
  );
}

export default App;
