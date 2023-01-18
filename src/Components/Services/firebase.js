import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqTgOSwfXe-miYFf3FrS3GqPTJ5NJkzQs",
  authDomain: "imprex-e2bc6.firebaseapp.com",
  projectId: "imprex-e2bc6",
  storageBucket: "imprex-e2bc6.appspot.com",
  messagingSenderId: "700610257612",
  appId: "1:700610257612:web:54c4f9375ec2377e0a1869",
};

const app = initializeApp(firebaseConfig);
const BD = getFirestore(app);

export async function getProductoById(idProducto) {
  let referenciaAlDocuemento = doc(BD, "productos", idProducto);
  let docShot = await getDoc(referenciaAlDocuemento);
  let itemDelFirebase = docShot.data();

  return { ...itemDelFirebase, id: referenciaAlDocuemento.id };
}

// nombre de BD, nomre de coleccion y Id

export async function getTodosProductos() {
  const collectionRef = collection(BD, "productos");
  const docsSnapShots = await getDocs(collectionRef);
  const docsArray = docsSnapShots.docs;
  const dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  });
  return dataDocs;
}

export async function crearOrdenDeCompra(propsDeLaCompra, carrito) {
  const nuevaOrden = await addDoc(
    collection(BD, "ordenDeCompras"),
    propsDeLaCompra
  );
  const batch = writeBatch(BD);
  propsDeLaCompra.items.forEach((prod, index) => {
    const refDelProd = doc(BD, "productos", prod.idProducto);

    const stockRestante = carrito[index].stock - prod.cantidad;
    batch.update(refDelProd, { stock: stockRestante });
  });
  await batch.commit();
  return { ...propsDeLaCompra, id: nuevaOrden.id };
}
