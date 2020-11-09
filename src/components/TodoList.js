import React, { useState, useEffect } from 'react'
import firebaseDB from '../utils/firebase'
import Todo from './Todo'

export default function TodoList() {

  const [todoList, setTodoList] = useState();

  // GET
  useEffect(() => {
    const todoReference = firebaseDB.database().ref("Todo");
    todoReference.on("value", (snapshot) => {
      // console.log(snapshot.val())
      const todos = snapshot.val()
      const todoList = []
      for (let id in todos) {
        // ... means I'll take every properties that todos[id] has, flat it then 
        // it won't be { id, { title, complete } } but rather { id, title, complete }
        // without ..., this must be todoList.push({id, todos[id].complete, todos[id].title}) to work
        todoList.push({id, ...todos[id]})
      }
      console.log(todoList)
      setTodoList(todoList)
    })
    // this [] will prevent this useEffect from getting retriggered infinite amount of time.
    // this [] means useEffects will be triggered whenever there's anything in [] changes.
  }, []);

  // DELETE
  const deleteAllCompleted = () => {
    const todoReference = firebaseDB.database().ref("Todo")
    todoList.map((todo) => {
      if(todo.complete) {
        const target = todoReference.child(todo.id)
        target.remove()
      }
      return ''
    })
  }

  const printList = todoList ? (
    todoList.map((todo) => {
      return (
        <div>
          <Todo todo={todo}/>
        </div>
      )
    })
  ) : ""

  return (
    <div>
      {printList}
      <button onClick={deleteAllCompleted}>Delete all completed tasks</button>
    </div>
  )
}
