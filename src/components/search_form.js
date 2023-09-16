
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SearchForm(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="SeachForm">
            <form className="row">
                <div className="col-9">
                <input 
                type="text" 
                className="form-control " 
                placeholder="Input search key"/>
                </div>
               <div className="col-3">
                
               <button onClick={handleShow}
               type="button" class="btn btn-primary">
                Create</button>
               </div>

            </form>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>       
            <input 
                type="text" 
                className="form-control " 
                placeholder="Enter todo"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
          <Button variant="secondary" onClick={handleClose}>
           Close
          </Button>
        </Modal.Footer>
      </Modal>  
        </div>
        
    )
}
export default SearchForm