import React from "react";

import { Container } from "./styles";

export default function Modal({ id = "modal", onClose = () => {}, children }) {
  // Identificar o clique no background
  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <Container>
      <div id={id} className="modalBackground" onClick={handleOutsideClick}>
        {children}
      </div>
    </Container>
  );
}
