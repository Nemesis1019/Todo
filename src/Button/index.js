import { useContext } from "react";
import "./Button.css"
import { TodoContex } from "../TodoContext";
export function CreateButton(){
     const {openmodal,
            setOpenmodal} = useContext(TodoContex)
    return(
        <div className="ContainerB">
            <button className="Button" onClick={()=>{setOpenmodal(!openmodal)}}>+</button>
        </div>
        
    );

}