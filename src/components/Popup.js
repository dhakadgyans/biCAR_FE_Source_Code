import React ,{useEffect,useState} from 'react';
import Modal from 'react-bootstrap-modal';

const Popup =({show,setShow,popupmsg})=>{


const handleClose = () => setShow(false);
return (
    <>

<Modal className="testSuccessModal" centered show={show} onHide={handleClose}>
		<Modal.Header className="text-center" closeButton>
			<Modal.Title>Result</Modal.Title>
		</Modal.Header>
		<Modal.Body>{popupmsg}</Modal.Body>
		<Modal.Footer>
			<button class="hvr-glow" onClick={handleClose}>
			Close
			</button>
		</Modal.Footer>
		</Modal>
        </>

);
    
}

export default Popup;