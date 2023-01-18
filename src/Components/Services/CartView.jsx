import { useContext, useState } from "react";
import { cartContext } from "../../storage/contextDelCarrito";
import Button from "../Button";
import { crearOrdenDeCompra } from "./firebase";
import { useNavigate } from "react-router-dom";


function CartView() {
  const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
  const [enviandoDatos, setEnviandoDatos] = useState (false)
const navigateTo = useNavigate()



  return (
    <div className="block h-screen bg-slate-300 vh">
      <h3>tu carrito</h3>
      {cart.map((item) => (
        <div
          className="border rounded-lg text-center border-blue-500 m-14   "
          key={item.id}
        >
          <p>{item.title}</p>
          <p>Unidades: {item.count}</p>
          <p>$ {item.price}</p>

          <p>Total: $ {totalPriceInCart()}</p>
          <button
            className="bg-transparent hover:bg-pink-300 text-pink-600 font-normal hover:text-white py px-2 border border-red-700 hover:border-transparent rounded"
            onClick={() => {
              removeItem(item.id);
            }}
          >
            X
          </button>
        </div>
      ))}
      <Button disabled={cart.length == 0 || enviandoDatos}
        buttonTouch={() => {
          const itemsAComprar = cart.map((compra) => {
            const miCompra = { idProducto: compra.id, cantidad: compra.count };
            return miCompra;
          }); setEnviandoDatos(true)
          crearOrdenDeCompra({items: itemsAComprar}, cart).then((orden)=>{clear(); setEnviandoDatos(false) ; navigateTo(`/thankyou/${orden.id}`)});
        }}
      >
        Generar Compra
      </Button>



    </div>
  );
}

export default CartView;
