'use client'
import AddToDo from "@/components/AddToDo";
import Todo from "@/components/TodoList";
import { useTodos } from "@/store/Todo";
import Link from "next/link";

export default function Home() {
  const { todos} = useTodos()
  return (
   <div className="grid min-h-screen place-items-center">
    <div className=" px-3 py-4">
      <h1 className="text-3xl tracking-wider text-green-400  "> 🧾 Todo With Typescript 🧾</h1>
      <AddToDo />
      <div className=" space-x-7 text-center text-xl">
      <Link className="focus:border-b-2 focus:border-green-500 " href={'/'}>All</Link>
      <Link className="focus:border-b-2 focus:border-green-500 " href={'/active'}>Active</Link>
      <Link className="focus:border-b-2 focus:border-green-500 " href={'/completed'}>Completed</Link>

      </div>
      <Todo todos={todos}/>
    </div>
   </div>
  )
}
