import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext({
  cart: [],

  addToCart: () => {},
  totalItemsInCart: () => {},
  removeItem: () => {},
  clear: () => {},
});

const Provider = cartContext.Provider;

function CartContextProvider(props) {
  let [cart, setCart] = useState([]);
  

  function addToCart(item, count) {
    const newCart = [...cart];

    let itemParaAgregarAlCarrito = cart.find(
      (itemInContext) => itemInContext.id === item.id
    );
    if (itemParaAgregarAlCarrito) {
      itemParaAgregarAlCarrito.count += count;
      setCart(newCart);
    } else {
      newCart.push({ ...item, count });
      setCart(newCart);
    }
   
  }

  function totalItemsInCart() {
    const valorInicial = 0;
    return cart.reduce((acumulador, item) => {
      return acumulador + item.count;
    }, valorInicial);
  }
// funcion para remover elemento pero le falta el boton
  function removeItem(idProducto) {
    const cartSinEsteProducto = cart.filter(
      (itemActual) => itemActual.id !== idProducto
    );
    setCart(cartSinEsteProducto);
  }
 
  function totalPriceInCart (){
    const valorInicial = 0
    const totalDeLaCompra = cart.reduce((acumulador, item)=>{return acumulador + (item.count * item.price)}, valorInicial)
    return totalDeLaCompra
  }

  function clear() {
    setCart([]);
  }

  return (
    <Provider value={{ cart, addToCart, totalItemsInCart, removeItem, totalPriceInCart ,clear }}>
      {props.children}
    </Provider>
  );
}

export { cartContext, CartContextProvider };
