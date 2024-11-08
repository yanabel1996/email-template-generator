import React, { useRef } from "react";
import EmailTemplate from "../EmailTemplate/EmailTemplate";
import "./style.css";

function ModalTemplateCode({ isOpen, setIsOpen, templateData }) {
  const textRef = useRef(null);
  function handleCopyCode() {
    const text = textRef.current.innerText; // Получаем текст из блока
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Text was copied to clipboard!");
      },
      (err) => {
        console.error("Can't copy text: ", err);
      }
    );
  }
  return (
    <div className={isOpen ? "modal-template open" : "modal-template"}>
      <div className="modal-template__content">
        <button onClick={() => setIsOpen(false)}>Close</button>
        <button onClick={handleCopyCode}>Copy</button>

        <p className="modal-template__text" ref={textRef}>
          <EmailTemplate data={templateData} />
        </p>
      </div>
    </div>
  );
}

export default ModalTemplateCode;
