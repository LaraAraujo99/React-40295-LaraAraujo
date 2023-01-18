import { useContext } from "react";
import { cartContext } from "../storage/contextDelCarrito";
function Contacto() {
  const contexto = useContext(cartContext);

  return (
    <div>
      Somos Imprex Impresiones Digitales <br></br> Pueden encontrarnos en
      nuestras redes: <br></br>{" "}
      <a className="text-green-600" href="#">
        Instagram
      </a>{" "}
      <a className="text-green-600" href="#">
        WhatsApp
      </a>{" "}
      <a className="text-green-600" href="#">
        Facebook
      </a>
    </div>
  );
}

export default Contacto;
