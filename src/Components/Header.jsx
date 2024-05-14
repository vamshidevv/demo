import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refreshData = () => {
    window.location.reload(true);
  };

  return (
    <>
      <div className="header-container">
        <h5>
          <span className="refresh-button" onClick={refreshData}>
            <LoopIcon style={{ fontSize: "25px" }} />
          </span>
        </h5>
        <div className="help-section">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>How To Use?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              1. Start the Experience : Scan the target image or tap on the
              screen to view the experience created using immarsify.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Go to Home
              </Button>
            </Modal.Footer>
          </Modal>
          <span className="help-button rounded-pill" onClick={handleShow}>
            Help
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
