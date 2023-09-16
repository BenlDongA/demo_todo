import Item from "./item"

function ListTodo(){
    return(
        <div className="ListTodo">
           
            <Item
            name="Go to supermarket"
            />
            <Item
             name="Do you my home work"/>
            <Item
             name="Play game"/>
            <Item
             name="Read novel"/>
          
        </div>
    )
}
export default ListTodo