import { useContext } from "react";

import { Link } from "react-router-dom";
import { IconGardenCart } from "@tabler/icons-react";

import GlobalContext from "../state/GlobalContext";

import "./Navbar.css";

function Navbar() {
  const user = useContext(GlobalContext).user;
  const cart = useContext(GlobalContext).cart
  function getTotalItems() {
    let total = 0;
    for(let i=0; i < cart.length; i++) {
      total += cart[i].qty;
    }
    return total;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Online Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"./catalog"}>
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"./about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"./contact"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to={"./admin"}>
                  Admin
                </Link>
              </li>
            </ul>
            <span className="text-white me-3">Welcome, {user.name}!</span>
            <Link to="/cart">
              <IconGardenCart stroke={2} color="white" className="me-1" />
              <span className="text-white">({getTotalItems()})</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
