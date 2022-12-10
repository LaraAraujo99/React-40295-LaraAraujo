import React, { useState } from "react";

export function ItemCount({ stock }) {
  const [cantProducto, setCantProducto] = useState(1);
  const condicion = stock || stock == 0;
  return (
    <>
      {condicion ? (
        <div>
          <button
            onClick={() => {
              if (cantProducto > 1) {
                setCantProducto(cantProducto - 1);
              }
            }}
          >
            -
          </button>
          <p>{cantProducto}</p>
          <button
            onClick={() => {
              if (cantProducto < stock) {
                setCantProducto(cantProducto + 1);
              }
            }}
          >
            +
          </button>
        </div>
      ) : null}
    </>
  );
}
