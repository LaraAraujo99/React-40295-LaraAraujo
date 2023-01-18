import carroDeCompras from "./carroDeCompras.png";
import { useContext } from "react";
import { cartContext } from "../storage/contextDelCarrito";
import { Link } from "react-router-dom";

export function CardWidget() {
  const valueContext = useContext(cartContext);
  const cantidad = valueContext.totalItemsInCart();

  return (
    <>
      <Link className="m-5" to={"/cart"}>
        <img
          className="  inline-block animate-bounce w-6 h-6 "
          src={carroDeCompras}
        />
        {cantidad > 0 ? <span>{cantidad}</span> : null}
      </Link>
    </>
  );
}
