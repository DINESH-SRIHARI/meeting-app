import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/data.css';

function Data(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className='data'>
      <img src={`https://source.unsplash.com/1600x900/?${props.img}`} className='img' alt={props.title} />

      <div className='flex'>
        <h1>{props.title}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      </div>
      <p className='time'>{props.time}</p>
      
      <p type="button" className="text-info" onClick={handleModalShow}>
        Know More
      </p>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header >
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.message}</p>
          <a href={props.link}>Join From Here</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Data;
