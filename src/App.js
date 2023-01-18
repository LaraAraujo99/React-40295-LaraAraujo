import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import primaveraImprex from "../src/Data/primaveraImprex.jpg";

import { ItemListContainer } from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import { CartContextProvider } from "./storage/contextDelCarrito";
import Contacto from "./Components/Contacto";
import CartView from "./Components/Services/CartView";
import {
  crearOrdenDeCompra,
  getTodosProductos,
} from "./Components/Services/firebase";
import TanksYou from "./Components/ThankYou";

// crearOrdenDeCompra({
//   items: [{ idProducto: "Szus6aukEJPSDMe3F1JC", cantidad: 3}],
// });

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            {/* poner repeat de bg image */}
            <Route
              path="/"
              // element={<img className="min-h-[80vh]" src={primaveraImprex}></img>}
              element={
                <div
                  className="h-[88vh] bg-repeat-y bg-left-top bg-cover"
                  style={{ backgroundImage: `url(${primaveraImprex})` }}
                ></div>
              }
            ></Route>
            <Route path="nosotros" element={<div>Nosotros</div>}></Route>
            <Route path="contacto" element={<Contacto></Contacto>}></Route>
            <Route
              path="producto/:idProducto"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route
              path="categoria/:idCategoria"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route path="cart" element={<CartView></CartView>}></Route>
           <Route path="/thankyou/:orderID" element={<TanksYou></TanksYou>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
