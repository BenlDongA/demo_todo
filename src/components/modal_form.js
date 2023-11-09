import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {

    const [inputText, setInputText] = useState(props.name); // Khởi tạo inputText với giá trị ban đầu là props.name

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
        value={inputText}
        onChange={(e)=>{
        setInputText(e.target.value)
        console.log("New inputText: ", e.target.value);
        }}
          type="text"
          className="form-control"
          placeholder="Enter todo..."
        />
      </Modal.Body>
      <Modal.Footer>
      <Button
          variant="primary"
          onClick={() => {
            props.handleClose(false);
            if (props.isEditMode) {           
              props.editTodos(props.index, inputText);
            } else {       
              props.addTodos(inputText);
            }
          }}
        >
          {props.buttonText}
        </Button>
        <Button variant="secondary" onClick={() => props.handleClose(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;