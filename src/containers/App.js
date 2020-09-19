import React from 'react';
import Header from '../components/Header.jsx';
import Productos from '../components/Productos';
import NotFound from "../components/NotFound";
import HeaderContainer from './HeaderContainer.jsx';


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <br></br>
      <Switch>
        <Route exact path="/" component={Productos}></Route>
        <Route path="/search/:keyword" component={Productos}></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
