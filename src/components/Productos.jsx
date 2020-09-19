import React from "react";
import Producto from "./Producto";
import Grid from "@material-ui/core/Grid";
import dataTest from '../assets/datatest';

function Productos() {
  return (
    <Grid container spacing={3}>
      {dataTest.map((producto) => {
        return <Producto imagen={producto.image} titulo={producto.title} vendedor={producto.reseller} precio={producto.price}/>;
      })}
    </Grid>
  );
}

export default Productos;
