import React from "react";
import "./projectModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = (props) => (
  <div>
    {/* <Button color="danger" onClick={(toggle) => props.buttonLabel}></Button> */}
    <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
      <ModalHeader toggle={props.toggle}>Modal Title</ModalHeader>
      <ModalBody>stuff here</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle}>Do something</Button>{' '}
        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default ProjectModal;