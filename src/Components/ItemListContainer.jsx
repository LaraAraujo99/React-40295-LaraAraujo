import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import Loader from "./Loader";
import { getTodosProductos } from "./Services/firebase";

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [estaCargando, setEstaCargando] = useState(true)
  const params = useParams();
  
  useEffect(() => {
    getTodosProductos().then((productsRecibidos) => {
      const productFiltrados = productsRecibidos.filter(
        (itemProd, index, lista) => {
          return itemProd.idCategory == params.idCategoria;
        }
      );
      setProducts(productFiltrados);
      setEstaCargando(false)
    });
  }, [params.idCategoria]);

  return (
    <>
      {estaCargando == true ? (
        <Loader></Loader>
      ) : (
        <div className=" flex flex-wrap  justify-center items-center w-full  min-h-[70vh]">
          {products.map((item) => {
            return <Item producto={item} key={item.id}></Item>;
          })}
        </div>
      )}
    </>
  );
}
