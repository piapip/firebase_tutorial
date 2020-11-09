import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      Todo
      {/* POST */}
      <Form />

      TodoList
      {/* GET */}
      <TodoList />
    </div>
  );
}

export default App;
