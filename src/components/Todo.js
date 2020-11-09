import React from 'react'
import firebaseDB from '../utils/firebase'
// the todo in function Todo({ todo }) will stand for this.props
export default function Todo({ todo }) {

  // DELETE
  const deleteTodo = () => {
    const todoReference = firebaseDB.database().ref("Todo")
    const target = todoReference.child(todo.id)
    target.remove()
  }

  // PUT
  const completeTodo = () => {
    const todoReference = firebaseDB.database().ref("Todo")
    const target = todoReference.child(todo.id)
    target.update({
      complete: !todo.complete
    })
  }

  return (
    <div>
      <h1 key={todo.id}>{todo.title}</h1>

      {/* PUT */}
      <button onClick={deleteTodo}>Delete</button>

      {/* DELETE */}
      <button onClick={completeTodo}>{todo.complete ? "Undo" : "Complete"}</button>
    </div>
  )
}
