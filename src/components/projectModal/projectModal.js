import React from "react";
import "./projectModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = (props) => (
  <div>
    {/* <Button color="danger" onClick={props.toggle}></Button> */}
    <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
      <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
      <ModalBody>
        <img src={props.image} className = "portPic"/>
        <div>{props.body}</div>
        <div>Techs used: {props.techs}</div>
      </ModalBody>
      <ModalFooter>
        <Button href={`${props.github}`} color="primary" target="_blank">GitHub Repo</Button>{' '}
        <Button color="secondary" href={props.site} target="_blank">Live Website</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default ProjectModal;