import React, { useState } from 'react'
import firebaseDB from '../../utils/firebase'

export default function Form() {
  
  // const [title, setTitle] = useState('')
  const [allValue, setAllValue] = useState({
    title: '',
    ibento: [],
    rate: 0,
    fitness: 0,
  })

  // POST
  const createCloth = () => {
    const todoReference = firebaseDB.database().ref("Cloth")
    const todo = { ...allValue }
    console.log(allValue)
    todoReference.push(todo)
  }

  const updateTitle = e => {
    allValue.title = e.target.value
    setAllValue({...allValue})
  }

  const updateEvent = e => {
    allValue.ibento.push(e.target.value)
    setAllValue({...allValue})
  }

  return ( 
    <div>
      <input type="text" value={allValue.title} onChange={updateTitle}/>
      <div>
        <div>
          <label>Choose an event:</label>
        </div>
        <input list="events" onChange={updateEvent}/>
        <datalist id="events">
          <option value="Kekkon" />
          <option value="Party"/>
          <option value="Ryokou"/>
          <option value="Date"/>
        </datalist>
      </div>
      <div>
        <button onClick={createCloth}>Add sample</button>
      </div>
    </div>
  )
}
