import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignUp({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [err, setErr] = useState("");
  const [statusCode, setStatusCode] = useState(200);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/signup", { name, email });

      setStatusCode(200);

      console.log(response.message);

      history.push("/");
    } catch (error) {
      setStatusCode(error.response.status);
      setErr(error.response.data.message);
    }
  }

  return (
    <Container>
      {statusCode !== 200 ? (
        <div
          style={{
            border: "1px solid red",
            height: "30px",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: "18px", margin: "auto" }}>{err}</h1>
        </div>
      ) : null}
      <h1>VUTTR</h1>
      <h1>Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />

        <form onSubmit={handleSubmit}>
          <input
            type="name"
            value={name}
            placeholder="ex: Fulano"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="ex: teste@teste.com.br"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Criar conta</button>
        </form>
      </div>

      <Link to="/">Fazer login</Link>
    </Container>
  );
}
