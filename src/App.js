import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsData } from "./actions/actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
 }, []);
  return (
    <div>
      <Router>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
