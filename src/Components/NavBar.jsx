import React from "react";
import { Link } from "react-router-dom";
import imprex from "./imprex.png";
import { CardWidget } from "./CardWidget";

function NavBar() {
  const saludo = "Hola, bienvenido a Imprex";

  return (
    <div className="flex justify-between bg-red-400">
      <div className=" ">
        <Link to={"/"}>
          <img className="w-20" src={imprex} />
        </Link>
      </div>

      <div className=" flex items-center">
        <Link className="m-5 " to={"/nosotros"}>
          Nosotros
        </Link>
        <Link className="m-5" to={"/categoria/0"}>
          Tarjetería
        </Link>
        <Link className="m-5" to={"/categoria/1"}>
          Calendarios
        </Link>
        <Link className="m-5" to={"/contacto"}>
          Contacto
        </Link>
        <CardWidget></CardWidget>
      </div>
    </div>
  );
}

export default NavBar;
