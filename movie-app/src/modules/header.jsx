import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1 className="d-flex justify-content-center header p-4">Film Milm</h1>
      <ul>
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/favourites">Favoriler</Link></li>
      </ul>
    </div>
  );
}

export default Header;
