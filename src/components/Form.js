import React, { useState } from 'react'
import firebaseDB from '../utils/firebase'

export default function Form() {
  
  const [title, setTitle] = useState('')

  // POST
  const createTodo = () => {
    const todoReference = firebaseDB.database().ref("Todo")
    const todo = {
      title, 
      complete: false,
    }

    todoReference.push(todo)
  }

  return ( 
    <div>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <button onClick={createTodo}>Add todo</button>
    </div>
  )
}
