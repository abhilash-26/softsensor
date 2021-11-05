import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { useState } from "react";
import { useHistory } from "react-router";
// import { allProducts } from "../server/controllers/productController";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory();
  const addToCart = (allProduct) => {
    console.log(allProduct);
    if (cartItems.includes(allProduct)) {
      alert("already there");
    } else {
      setCartItems([...cartItems, allProduct]);
    }
    history.push("/cart");
  };
  return (
    <div className="App">
      {/* <Router> */}
      <Switch>
        <Route exact path="/">
          <Home addToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
