import { productos } from "../../Data/productos";


export function promiseData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Llamado resuelto");
      resolve(productos);
    }, 2000);
  });
}
