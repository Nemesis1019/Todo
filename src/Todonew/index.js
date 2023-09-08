import { useContext } from "react"
import { TodoContex } from "../TodoContext"
import "./Todonew.css"

export function Todonew(){
    const {
        newT,
        setNewt,
        setOpenmodal,savenew}=useContext(TodoContex)
    
    return(
        <div className="ContainerNew">
            <span className="Titulo">Crea tu nueva tarea</span>
            <input className="InputN" onChange={(event)=>{setNewt(event.target.value)}}  placeholder="Escribe el nuevo todo" />
            <div className="ContainerBotones">
                <button className="btn CancelarD" onClick={()=>setOpenmodal(false)}>Cancelar</button> 
                <button className="btn AñadirD" onClick={()=>{savenew(newT)
                setOpenmodal(false)}} >Añadir</button>
            </div>
        
        </div>
    
        
    
    )
    
}