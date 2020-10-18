import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Producto from "./Producto";
import Grid from "@material-ui/core/Grid";
import dataTest from "../assets/datatest";

function Productos({ onRouteChange }) {
  let { keyword } = useParams();

  useEffect(() => {
      onRouteChange(keyword);
  }, [window.location.pathname]);

  return (
    <Grid container spacing={1}>
      {dataTest.map((producto) => {
        return (
          <Grid item xs={12} key={producto.id}>
            <Producto
              imagen={producto.image}
              titulo={producto.title}
              vendedor={producto.reseller}
              precio={producto.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Productos;