import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Item(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDelete, setShowDelete] = useState(false);  
  const handleCloseDelete = () => setShowDelete(false); 
  const handleShowDelete = () => setShowDelete(true); 
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const borderStyle = isClicked ? { border: '2px solid blue' } : {};



  return (
    <div
    onClick={handleClick}
    className="Item row"
    style={borderStyle}
   
  >
      <div className="text col-10">{props.name}</div>
      <div className="col-1">
        <button onClick={handleShowDelete} className="btn btn-danger"> 
          <i className="fa fa-trash "></i>
        </button>
      </div>
      <div className="col-1">   
        <button onClick={handleShow} className="btn btn-info"> 
          <i className="fa fa-edit"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit this todo</Modal.Title> 
        </Modal.Header>
        <Modal.Body>Go to suppermarket</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}> 
        <Modal.Header closeButton>
          <Modal.Title>Delete this todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete this todo?<br />
            This action cannot be undone.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDelete}> 
            Delete
          </Button>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Item;
