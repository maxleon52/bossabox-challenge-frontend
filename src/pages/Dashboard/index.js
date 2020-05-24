import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, Content } from "./styles";

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    async function loadTools() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/tools", {
        headers: { user_id },
      });

      setTools(response.data);
    }

    loadTools();
  }, []);

  return (
    <Container>
      <h1>VUTTR</h1>
      <strong>Very Useful Tools to Remember</strong>

      <div className="wrapper-form">
        <form>
          <input type="text" placeholder="pesquise por #tags" />
          <button type="button">ADD</button>
        </form>
      </div>

      {tools.map((tool) => (
        <ul>
          <li key={tool._id}>
            <Content>
              <header>
                <a href={tool.link} target="_blank">
                  {tool.title}
                </a>
                <button type="button">Remover</button>
              </header>

              <p>{tool.description}</p>

              {tool.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </Content>
          </li>
        </ul>
      ))}
    </Container>
  );
}
