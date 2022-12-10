import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";

import { ItemListContainer } from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

const greeting = "Bienvenidos a Imprex Impresiones Digitales";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
          <Route path="nosotros" element={<div>Nosotros</div>}></Route>
          <Route path="contacto" element={<div>contacto</div>}></Route>
          <Route path="producto/:idProducto" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route
            path="categoria/:idCategoria"
            element={<ItemListContainer></ItemListContainer>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
