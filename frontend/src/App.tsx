import React from 'react';
import './App.css';
import {ProductList} from "./components/products/productList"
import {Box, CssBaseline, Grid} from "@mui/material";
import {Nav} from "./components/Nav";
import {Filter} from "./components/Filter";
function App() {
  return (
    <div className="App">
        <CssBaseline/>
        <Nav>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    {/*<ProductList/>*/}
                </Grid>
                <Grid item xs={2}>
                    <Filter/>
                </Grid>
            </Grid>

        </Nav>
    </div>
  );
}

export default App;
