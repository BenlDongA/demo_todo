import Item from "./item"
// import { useState } from "react"
function ListTodo(props){
    
   let datas = props.listTodos.map((item, index)=>{
        return <Item 
        deleteTodo={props.deleteTodo} 
        key={index} 
        name={item.name} 
        index={index}
        editTodos={props.editTodos}/>
    })
    return(
        <div className="ListTodo">
           {datas}
           
        </div>
    )   
}
export default ListTodo