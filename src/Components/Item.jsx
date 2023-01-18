import { Link } from "react-router-dom";

export function Item ({producto}){
return <div className=" italic bg-gray-200 w-48 h-72 text-center  border m-3  border-slate-800">
    <p>{producto.title}</p>
    {/* no llega la imagen */}
    <div className="w-28 h-36 border border-slate-900"><img src={producto.img}></img></div>
    <p className="p-4">{"$" + producto.price}</p>
    <p>{producto.TipoDePapel}</p>
    <Link className="text-red-400" to={"/producto/" + producto.id}>Ver más</Link>
</div>
}