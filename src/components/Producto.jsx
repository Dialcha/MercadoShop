import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Producto({ imagen, titulo, vendedor, precio }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container xs={12}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imagen} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Vendido por: {vendedor}
                </Typography>
                <Typography variant="body" component="h1">
                  {precio}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Detalles del producto
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      </Grid>
      
      
    </div>
  );
}

export default Producto;
