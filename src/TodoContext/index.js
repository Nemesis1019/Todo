import React, { useState } from "react";
import {useLocalStorage} from "./useLocalStorage"

const TodoContex = React.createContext()

function TodoProvider( {children} ){
    const {item:todos, 
        saveItem:saveTodos,
        load,
        error} = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openmodal, setOpenmodal] = React.useState(false);
      const [newT,setNewt]= useState("")
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
      const savenew = (value)=>{
        const newa= [...todos,{"text":value,"completed":false}]
        saveTodos(newa)
      }
    return(
        <TodoContex.Provider value={{
            load,
            todos,
            completeTodo,
            deleteTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            totalTodos,
            error,
            completedTodos,
            openmodal,
            setOpenmodal,
            saveTodos,
            newT,
            setNewt,
            savenew
        }}>
            { children }
        </TodoContex.Provider>
    )
   
}


export {TodoContex,TodoProvider};