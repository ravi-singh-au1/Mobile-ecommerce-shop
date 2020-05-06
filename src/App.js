import React, { Component } from "react";
import { Switch, Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/cart";
import Details from "./components/Details"
import Modal from './components/Modal'
import './App.css'
class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>

    );
  }
}
export default App;
