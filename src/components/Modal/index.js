import React from "react";

import { Container } from "./styles";

export default function Modal({ children }) {
  return (
    <Container>
      <div className="modalBackground">{children}</div>
    </Container>
  );
}
