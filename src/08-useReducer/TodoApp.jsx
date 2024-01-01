import React from 'react';
import { useTodos } from '../hooks';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (

        <>
            <h1>TodoApp: { todosCount } <small>Pendientes: { pendingTodosCount } </small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>


                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }  // (todo) => handleNewTodo(todo)
                    />
                </div>

            </div>

        </>

    )
}
