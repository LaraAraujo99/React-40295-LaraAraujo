export function ItemDetail({ producto }) {
  return (
    <div className=" italic ">
      <div>
        <img src={producto.img}></img>
      </div>
      <div>
        <p>{producto.title}</p>
        <p>{producto.ventaPorCantidadDeUnidades}</p>
        <p>$ {producto.price}</p>
        <p>Stock: {producto.stock} Unid.</p>
        <p>{producto.description}</p>
      </div>
    </div>
  );
}
