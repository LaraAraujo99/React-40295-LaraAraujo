import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useEffect } from "react";
import { getProductoById } from "./Services/firebase";
import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../storage/contextDelCarrito";
import Loader from "./Loader";
import Button from "./Button";

export function ItemDetailContainer() {
  const fnDelContexto = useContext(cartContext).addToCart;
  const [detalleProducto, setDetalleProducto] = useState({});
  const idDelProduct = useParams().idProducto;
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
  useEffect(() => {
    getProductoById(idDelProduct).then((prductoRecibido) => {
      
      setDetalleProducto(prductoRecibido);
    });
  }, [idDelProduct]);

  return (
    <>
      {detalleProducto.id == undefined ? (
        <Loader></Loader>
      ) : (
        <div className="bg-gray-200 w-80 h-auto text-center  justify-center border m-3  border-slate-800">
          <ItemDetail
            className=" flex flex-wrap  justify-center m-auto items-center w-full  min-h-[70vh]"
            producto={detalleProducto}
          ></ItemDetail>

          {agregadoAlCarrito ? (
            <Button>
              <Link to={"/cart"}>🛒 Ir al Carrito</Link>
            </Button>
          ) : (
            <ItemCount
              stock={detalleProducto.stock}
              FnDelBtnCarrito={(cantidad) => {
                fnDelContexto(detalleProducto, cantidad);
                setAgregadoAlCarrito(true);
              }}
            ></ItemCount>
          )}
        </div>
      )}
    </>
  );
}
