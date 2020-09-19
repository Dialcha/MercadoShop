import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Anímate e ingresa a <Link to="/">Principales</Link> e infórmate con las
        últimas noticias
      </p>
    </div>
  );
}

export default NotFound;
