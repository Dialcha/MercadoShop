import React, { useEffect } from "react";
import Productos from "../components/Productos";
import NotFound from "../components/NotFound";
import HeaderContainer from "./HeaderContainer.jsx";
import ProductoContainer from "./ProductoContainer";
import ProductosContainer from "./ProductosContainer";
import HeaderSearch from "./HeaderSearch";

import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    const { pathname } = window.location;
    console.log("New path:", pathname);
  }, [window.location.pathname]);

  return (
    <div className="App">
      <HeaderContainer />
      <br></br>
      <Switch>
        <Route path="/search/:keyword" component={ProductosContainer}></Route>
        <Route path="/detalle" component={ProductoContainer}></Route>
        <Route exact path="/" component={Productos}></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
