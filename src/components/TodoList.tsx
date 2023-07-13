'use client'

import { useTodos } from '@/store/Todo'
import React from 'react'
import { Todo } from '@/store/Todo'

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const { toggleHandleChange, handleTodoDelete } = useTodos()

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='flex items-center text-lg space-x-10 sm:space-x-5 mt-8 px-5 border-y-[1px] border-gray-700 mb-3 min-h-[45px] sm:justify-around'
        >
          <input
            type='checkbox'
            name=''
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleHandleChange(todo.id)}
          />
          <label
            className={`flex-1 truncate transition duration-1000 ease-in-out ${
              todo.completed ? 'line-through' : ''
            }`}
            htmlFor={`todo-${todo.id}`}
            style={{ transition: 'all 0.5s' }}
          >
            {todo.task}
          </label>
          {todo.completed && (
            <button
              className='bg-green-600 rounded-md self-center text-white px-2 sm:px-3 sm:py-1 ml-2'
              type='button'
              onClick={() => handleTodoDelete(todo.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
