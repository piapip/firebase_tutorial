import './App.css';
// import Form from './components/Cloth/Form'
import Form from './components/Todo/Form'
import TodoList from './components/Todo/TodoList'

function App() {

  return (
    <div className="App">
      {/* Upload picture
      <Form /> */}

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
