import { ItemCount } from "./ItemCount";

export function ItemDetail({ producto}) {
  return (
    <div  className=" italic ">
      <p>{producto.title}</p>
      <img src={producto.img}></img>
      <p>{producto.title}</p>
      <p>{producto.ventaPorCantidadDeUnidades}</p>
      <p>$ {producto.price}</p>
      <p>Stock: {producto.stock} Unid.</p>
      <p>{producto.description}</p>
    </div>
  );
}
