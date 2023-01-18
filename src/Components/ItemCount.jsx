import React, { useState } from "react";
import Button from "./Button";

export function ItemCount({ stock, FnDelBtnCarrito }) {
  const [cantProducto, setCantProducto] = useState(1);
  const condicion = stock || stock == 0;
  return (
    <>
      {condicion ? (
        <div>
          <Button
            buttonTouch={() => {
              if (cantProducto > 1) {
                setCantProducto(cantProducto - 1);
              }
            }}
          >
            -
          </Button>
          <p>{cantProducto}</p>
          <Button
            buttonTouch={() => {
              if (cantProducto < stock) {
                setCantProducto(cantProducto + 1);
              }
            }}
          >
            +
          </Button>
          <div>
            <Button
              buttonTouch={() => {
                FnDelBtnCarrito(cantProducto);
              }}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
