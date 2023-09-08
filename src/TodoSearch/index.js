
import { TodoContex } from "../TodoContext";
import "./TodoSearch.css"
import { useContext } from "react";
export function TodoSearch(){
    const {searchValue,
        setSearchValue} = useContext(TodoContex)
    return(
        <div className="Inputd">
            <input className="Input" onChange={(event)=>setSearchValue(event.target.value)} value={searchValue} placeholder="Escribe la tarea que quieres buscar" />
        </div>
        
    );
  }