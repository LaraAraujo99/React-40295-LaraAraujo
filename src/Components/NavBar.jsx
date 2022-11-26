import React from "react";
import { ItemListContainer } from "./ItemListContainer";
import imprex from "./imprex.png";
import { CardWidget } from "./CardWidget";

function NavBar() {
  const saludo = "Hola, bienvenido a Imprex";

  return (
    <div className="flex justify-between bg-red-400">
      <div className=" ">
        <a href="#">
          <img className="w-20" src={imprex} />
        </a>
      </div>

      <div className=" flex items-center">
        <a className="m-5 " href="#">
          Nosotros
        </a>
        <a className="m-5" href="#">
          Productos
        </a>
        <a className="m-5" href="#">
          Contacto
        </a>
        <CardWidget></CardWidget>
      </div>
    </div>
  );
}

export default NavBar;
