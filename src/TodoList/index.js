import "./TodoList.css"
export function TodoList({children}){
    return(
        <ul className="List">
            {children}
        </ul>
    );
  }