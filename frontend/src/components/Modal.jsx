import React from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import Backdrop from "./Backdrop";
import "./Modal.css";

export const CustomModal=({show,title,body,add,handleClose,handlePath})=>{
    return (
        <>
        {show && <Backdrop show={show}/> }
        <div className="modal">
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header className="modal-header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal.body">{body}</Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button onClick={handlePath}>{add}</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

