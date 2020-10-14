import React from "react";
import CarouselProducts from "./Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ProductDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <CarouselProducts />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}>
            <Typography variant="h3" component="h2" gutterBottom>
              Iphone max
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              $1.100.000
            </Typography>
            <Typography variant="caption" component="h2" gutterBottom>
              vendido por: Diego
            </Typography>

            <Typography variant="h4" component="h2" gutterBottom>
              Descuento: 25%
            </Typography>

            <Typography variant="body1" component="h2" gutterBottom>
              Reseña blah blah blah
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;
