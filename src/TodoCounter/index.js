import { TodoContex } from '../TodoContext';
import './TodoCounter.css';
import { useContext } from 'react';
export function TodoCounter(  ){
    const {totalTodos,completedTodos}=useContext(TodoContex)
    return(
        <h1 className='ContainerT'>
            Has completado <span className="Type">{completedTodos}</span>
            de <span className="Type">{totalTodos}</span> TODOs
        </h1>
    );
  }