import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import { promiseData } from "./Services/promiseData";

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    promiseData().then((productsRecibidos) => {
      console.log(productsRecibidos);
      const productFiltrados = productsRecibidos.filter(
        (itemProd, index, lista) => {
          return itemProd.idCategory == params.idCategoria;
        }
      );
      setProducts(productFiltrados);
    });
  }, [params.idCategoria]);

  return (
    <div className=" flex flex-wrap  justify-center items-center w-full  min-h-[70vh]">
      {products.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}
