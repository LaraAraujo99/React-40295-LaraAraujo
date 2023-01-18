import { productos } from "../../Data/productos";


export function promiseData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      resolve(productos);
    }, 2000);
  });
}
