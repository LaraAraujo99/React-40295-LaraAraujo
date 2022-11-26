import "./App.css";
import { ItemListContainer } from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";


const greeting = "Bienvenidos a Imprex Impresiones Digitales";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer prop={greeting}></ItemListContainer>
      
    </>
  );
}

export default App;
