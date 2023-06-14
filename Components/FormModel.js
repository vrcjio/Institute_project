"use client"
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PermanentEnquiryForm from './EnquiryForm';
import LoginForm from './LoginFrom';

function EnquiryForm({ modelView , setChangeContaint}) {
  const [show, showModel] = useState();
  useEffect(() => {
    showModel(true);
  }, [])
  const setShow = () => {
    showModel(false);
    setChangeContaint("Main");
  }
  console.log("setChangeContaint: ",setChangeContaint)
  return (
    <>

      <Modal show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>
            {(modelView === "Enquiry") && <>Enquiry Form</>}
            {(modelView === "Login") && <>Login Form</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {(modelView === "Enquiry") && <PermanentEnquiryForm setShow={setShow} />}
            {(modelView === "Login") && <LoginForm setShow={setShow} setChangeContaint={setChangeContaint} />}

        </Modal.Body>
        <Modal.Footer>
          Thank You! For Visiting
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EnquiryForm;