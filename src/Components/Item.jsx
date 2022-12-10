import { Link } from "react-router-dom";

export function Item ({producto}){
return <div className=" w-56 h-48  border m-3 border-slate-800">
    <p>{producto.title}</p>
    <p>{producto.img}</p>
    <p>{producto.price}</p>
    <p>{producto.description}</p>
    <Link to={"/producto/" + producto.id}>Ver más</Link>
</div>
}