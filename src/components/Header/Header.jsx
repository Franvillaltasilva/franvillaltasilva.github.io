import "./Header.scss";
import React from "react";
import Menu from "react-ionicons/lib/IosMenu";

const Header = ({}) => {
  const showMenu = () => {
    alert("hi");
  };

  return (
    <nav>
      <p>f villalta</p>

      <div className="sections">
        <p>skills</p>
        <p>projects</p>
        <p>about me</p>
        <p>contact</p>
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
