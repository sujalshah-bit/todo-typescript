'use client'
import { useTodos } from "@/store/Todo";
import { todo } from "node:test";
import React,{ useState, ChangeEvent, FormEvent  } from "react"

const AddToDo: React.FC = () => {
    
    const [Todo, setTodo] = useState<string>("")
    
    const  { handleAddTodo,todos } = useTodos()
    
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      handleAddTodo(Todo)
        setTodo("")
    }
  return (
    <form className="text-center my-8" onSubmit={handleSubmit}>
        <input className="bg-transparent border-b-2 border-green-500 outline-none  " type="text" placeholder="Write Your Todo" name="" value={Todo} onChange={(e:ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
        <button className="bg-green-600  text-white px-3 py-1 ml-2" type="submit"> ADD</button>
    </form>
  )
}



export default AddToDo