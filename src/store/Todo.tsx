"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Define the Todo type
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

// Define the TodosContext type
export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleHandleChange: (id: string) => void;
  handleTodoDelete: (id: string) => void;
};

// Create the todosContext with a default value of null
export const todosContext = createContext<TodosContext | null>(null);

// Create the TodosProvider component
export const TodosProvider = ({ children }: { children: ReactNode }) => {
  let storedTodos: string | null = null;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    storedTodos = localStorage.getItem('todos');
  }
  
  const initialTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];
  
    // State for storing the todos
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
  
    // Function to handle adding a new todo
    const handleAddTodo = (task: string) => {
      setTodos((prev) => {
        const newTodos: Todo[] = [
          {
            id: Math.random().toString(),
            task,
            completed: false,
            createdAt: new Date(),
          },
          ...prev,
        ];
        return newTodos;
      });
    };
  
    const toggleHandleChange = (id: string) => {
      setTodos((prev) => {
        const newTodos = prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
        return newTodos;
      });
    };
  
    const handleTodoDelete = (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
  
    // Update local storage whenever todos change
    useEffect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }, [todos]);
  
    // Provide the context value and render the children components
    return (
      <todosContext.Provider
        value={{ todos, handleAddTodo, toggleHandleChange, handleTodoDelete }}
      >
        {children}
      </todosContext.Provider>
    );
  };

// Custom hook to access the TodosContext
export function useTodos() {
  const todosContextValue = useContext(todosContext);
  if (!todosContextValue) {
    throw new Error("useTodos used outside of TodosProvider");
  }
  return todosContextValue;
}
