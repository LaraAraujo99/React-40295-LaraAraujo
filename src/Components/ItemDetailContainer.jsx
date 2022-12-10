import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useEffect } from "react";
import { promiseData } from "./Services/promiseData";
import { useState } from "react";


export function ItemDetailContainer(){
    const [detalleProducto, setDetalleProducto] = useState({})
 const idDelProduct = useParams().idProducto
 useEffect(() => {
    promiseData().then((productsRecibidos) => {
      console.log(productsRecibidos);
      const esteProducto = productsRecibidos.find(
        (itemProd) => {
          return itemProd.id == idDelProduct
        }
      );
      setDetalleProducto(esteProducto);
    });
  }, [idDelProduct]);


    return <div>
        <ItemDetail producto={detalleProducto}></ItemDetail> 
    </div>
}