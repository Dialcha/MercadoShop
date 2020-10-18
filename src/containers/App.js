import React, { useEffect } from "react";
import Productos from "../components/Productos";
import NotFound from "../components/NotFound";
import HeaderContainer from "./HeaderContainer.jsx";
import ProductoContainer from "./ProductoContainer";
import ProductosContainer from "./ProductosContainer";
import ProductosFetch from "./ProductosCopyContainer";
import HeaderSearch from "./HeaderSearch";

import { Switch, Route, withRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <br></br>
      <Switch>
        <Route path="/search/:keyword" component={ProductosFetch}></Route>
        <Route path="/detalle" component={ProductoContainer}></Route>
        <Route exact path="/" component={ProductoContainer}></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
