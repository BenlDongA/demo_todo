import { useState } from "react";
import ModalForm from "./modal_form";

function SearchForm(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="SearchForm">
      <form className="row">
        <div className="col-9"> 
          <input
            type="text"
            className="form-control"
            placeholder="Input Search key"
          />
        </div>
        <div className="col-3">
          <button
            onClick={handleShow}
            type="button"
            className="btn btn-primary"
          >
            Create
          </button>
        </div>
      </form>
      <ModalForm
      addTodos={props.addTodos}
        buttonText="Create"
        title="Create new todo"
        show={show}
        handleClose={setShow}
      />
    </div>
  );
}

export default SearchForm;