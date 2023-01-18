import { Item } from "./Item";

export function ItemList ({productos}){
   return <div className=" flex flex-wrap items-center">
    {productos.map((elem)=>{
        return <Item producto={elem} key={elem.id}></Item>
        
    })}
   </div>
}