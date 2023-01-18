import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrden = useParams().orderID;
  return (
    <div>
      <h1>Gracias Por Tu Compra</h1>
      <h3>Se generó la orden correctamente</h3>
      <p>Tu numero de ticket es: {idOrden}</p>
    </div>
  );
}

export default ThankYou;
