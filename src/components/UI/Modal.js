import "./Modal.css";
import ReactDOM from "react";

const overlaysRoot = document.getElementById("overlays");

function Backdrop() {
  return <div className="backdrop"></div>;
}

function ModalOverlay(props) {
  return <div className={props.className}> {props.children}</div>;
}

function Modal(props) {
  return (
    <>
      {console.log(props.children)}
      {ReactDOM.createPortal(<Backdrop />, overlaysRoot)}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        overlaysRoot
      )}
    </>
  );
}

export default Modal;
