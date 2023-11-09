
  import './App.css';
  import SearchForm from './components/search_form';
  import FilterForm from './components/fiter_form';
  import ListTodo from './components/list_todo';
  import { useState } from "react"

  function App() {
    
    const list =[
      {name:"hoc js", isdone: false,isSelected: false},
      {name:"hoc html", isdone: false,isSelected: false},
      {name:"hoc cs", isdone: false,isSelected: false},
      {name:"hoc note", isdone: false,isSelected: false},
      {name:"hoc reactjs", isdone: false,isSelected: false},
      {name:"hoc py", isdone: false,isSelected: false},
      {name:"hoc php", isdone: false,isSelected: false},
    
    ]
    let [listTodos, setTodos] = useState(list);
    
    function deleteTodo(index) {
      const updatedList = listTodos.filter((_, i) => i !== index);
      setTodos(updatedList);
    }
    
    
    function addTodos(name){
      let todo ={ name, isDone: false}
      setTodos([todo, ...listTodos])
    }
    function editTodos(index, newName, isSelected) {
      const updatedList = [...listTodos];
      updatedList[index].name = newName;
    
      setTodos(updatedList);
    }
    
    return (
      <div className="container">
      <h1 className="title">TODO </h1>
      <SearchForm addTodos={addTodos}/>
      <FilterForm/>
      <ListTodo listTodos={listTodos} 
      deleteTodo={deleteTodo} 
      editTodos={editTodos}/> 
      </div>
    );
  }

  export default App;
