import logo from './logo.svg';
import './App.css';
import SearchForm from './components/search_form';
import FilterForm from './components/fiter_form';
import ListTodo from './components/list_todo';



function App() {
  return (
    <div className="container">
     <h1 className="title">TODO </h1>
     <SearchForm/>
     <FilterForm/>
     <ListTodo/>
    </div>
  );
}

export default App;
