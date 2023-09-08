import {AiTwotoneDelete} from "react-icons/ai"
import "./TodoItem.css"

export function TodoItem(props){
    
    return(
      
      <div className="ContainerI">
        <li className="Items">
        <input className="InputC" type="checkbox"  onClick={props.onComplete} checked={props.completed} />
        <p className= {` ${props.completed && "p-completed"}`}>{props.text}</p>
        
        <span className="Icon-d" onClick={props.onDelete}><AiTwotoneDelete/></span>
      </li>
      </div>
      
    );
  }