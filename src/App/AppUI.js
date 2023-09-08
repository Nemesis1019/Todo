import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { CreateButton } from '../Button';
import { TodoContex } from '../TodoContext';
import {Modal} from "../Modal"
import { Todonew } from '../Todonew';

function AppUI() {
  const {
    load,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openmodal
  } = React.useContext(TodoContex);
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {load && (
          <>
            <TodoLoading />
            
          </>
        )}
        {error && <TodoError/>}
        {(!load && searchedTodos.length === 0) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateButton />
      {openmodal && <Modal>
            <Todonew/>
      </Modal>
        }
    </>
  );
}

export { AppUI };