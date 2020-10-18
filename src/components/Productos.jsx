import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Producto from "./Producto";
import Grid from "@material-ui/core/Grid";

function Productos({ onRouteChange, items }) {
  let { keyword } = useParams();

  useEffect(() => {
    onRouteChange(keyword);
    console.log(items);
  }, [window.location.pathname]);

  return (
    <Grid container spacing={1}>
      {items.map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <Producto
              imagen={item.thumbnail}
              titulo={item.title}
              vendedor={item.seller}
              precio={item.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Productos;
