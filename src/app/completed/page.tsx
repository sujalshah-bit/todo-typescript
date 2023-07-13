"use client";
import AddToDo from "@/components/AddToDo";
import TodoList from "@/components/TodoList";
import { useTodos } from "@/store/Todo";
import Link from "next/link";
import React from "react";

const completed = () => {
  const { todos } = useTodos();
  const fliterTodos = todos.filter((todo) => todo.completed === true);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="px-3 py-4">
        <h1 className="text-3xl tracking-wider text-green-400  ">
          {" "}
          🧾 Todo With Typescript 🧾
        </h1>
        <AddToDo />
        <div className=" space-x-7 text-center text-xl">
      <Link className="focus:border-b-2 focus:border-green-500 transition-all" href={'/'}>All</Link>
      <Link className="focus:border-b-2 focus:border-green-500 transition-all" href={'/active'}>Active</Link>
      <Link className="focus:border-b-2 focus:border-green-500 transition-all" href={'/completed'}>Completed</Link>

      </div>

        <TodoList todos={fliterTodos} />
      </div>
    </div>
  );
};

export default completed;
