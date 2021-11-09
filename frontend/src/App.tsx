import React from 'react';
import './App.css';
import {ProductList} from "./components/products/productList"
import {CssBaseline} from "@mui/material";
import {Nav} from "./components/Nav";
function App() {
  return (
    <div className="App">
        <CssBaseline/>
        <Nav/>
        <ProductList/>
    </div>
  );
}

export default App;
