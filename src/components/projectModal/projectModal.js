import React from "react";
import "./projectModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = (props) => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
      <ModalHeader toggle={props.toggle}>
        <div className = "title">{props.title}</div>
      </ModalHeader>
      <ModalBody>
        <img src={props.image} className = "portPic" alt={props.alt}/>
        <div style={{marginTop: 10}}>{props.body}</div>
        <div style={{marginTop: 10}}>Techs used: {props.techs}</div>
      </ModalBody>
      <ModalFooter>
        <Button href={`${props.github}`} color="primary" target="_blank">GitHub Repo</Button>{' '}
        <Button color="secondary" href={props.site} target="_blank">Live Website</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default ProjectModal;