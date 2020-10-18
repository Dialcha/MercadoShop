import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Anímate e ingresa a <Link to="/">Principales</Link> y encuentra los mejores productos
      </p>
    </div>
  );
}

export default NotFound;
