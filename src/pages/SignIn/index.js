import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignIn({ history }) {
  const [email, setEmail] = useState("");
  const [statusCode, setStatusCode] = useState(200);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/signin", { email });

      setStatusCode(200);

      const { _id } = response.data;

      localStorage.setItem("user", _id);

      history.push("/dashboard");
    } catch (error) {
      setStatusCode(error.response.status);
    }
  }

  return (
    <Container>
      {statusCode !== 200 ? (
        <div
          style={{ border: "1px solid red", height: "50px", padding: "8px" }}
        >
          <h1>E-mail inválido</h1>
        </div>
      ) : null}

      <h1>VUTTR</h1>
      <h1>Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />
        <h2>Bem-vindo!</h2>
        <h2>Entre com seu email</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ex: teste@teste.com.br"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>

      <Link to="/signup">Crie sua conta!</Link>
    </Container>
  );
}
