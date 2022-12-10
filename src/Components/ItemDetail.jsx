import { ItemCount } from "./ItemCount";

export function ItemDetail({ producto }) {
  return (
    <div>
      <p>{producto.title}</p>
      <p>{producto.img}</p>
      <p>{producto.title}</p>
      <p>{producto.ventaPorCantidadDeUnidades}</p>
      <p>{producto.price}</p>
      <p>{producto.stock}</p>
      <p>{producto.description}</p>
      <ItemCount stock={producto.stock}></ItemCount>
    </div>
  );
}
