import "./Header.scss";
import React from "react";
import Menu from "react-ionicons/lib/IosMenu";
import { Link } from "react-router-dom";

const Header = ({}) => {
  const showMenu = () => {
    alert("hi");
  };

  return (
    <nav>
      <Link className="link" to="/">
        fran villalta
      </Link>

      <div className="sections">
        <Link className="link" to="/skills">
          skills
        </Link>
        <Link className="link" to="/projects">
          projects
        </Link>
        <Link className="link" to="/about">
          about
        </Link>
        <Link className="link" to="/contact">
          contact
        </Link>
      </div>
      <Menu
        className="menu"
        onClick={() => showMenu}
        fontSize="32px"
        color="#2b6a76"
      />

      <ion-icon name="grid"></ion-icon>
    </nav>
  );
};

export default Header;
