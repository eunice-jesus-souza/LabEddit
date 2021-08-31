import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <figure>
        <img
          style={{ width: "100px" }}
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
        />
      </figure>

      <div>
        <Link to="/Cadastro">inscreva-se</Link>
        <Link to="/Login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
