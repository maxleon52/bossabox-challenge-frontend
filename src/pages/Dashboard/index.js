import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";

import api from "../../services/api";

import sad from "../../assets/sad.svg";

import { Container, Content } from "./styles";

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

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
      {/* Modal of the remove */}
      {isModalVisible ? (
        <Modal>
          <div className="confirmRemove">
            <header>
              <span className="title-remove">Remove tool</span>
            </header>
            <p>Are you sure you wont to remove hotel?</p>

            <form>
              <button
                className="btn-cancel"
                onClick={() => setIsModalVisible(false)}
              >
                Cancel
              </button>
              <button className="btn-confirm">Yes, remove.</button>
            </form>
          </div>
        </Modal>
      ) : null}

      {/* Modal of the ADD */}
      {isModalAddVisible ? (
        <Modal onClose={() => setIsModalAddVisible(false)}>
          <div className="content-add">
            <header>
              <span className="title-add">Add new tool</span>
            </header>

            <form>
              <label htmlFor="tool">Tool Name</label>
              <input name="tool" type="text" placeholder="Tool" />

              <label htmlFor="link">Tool Link</label>
              <input
                name="link"
                type="text"
                placeholder="https://github.com/typecode/hotel"
              />

              <label htmlFor="description">Tool Description</label>

              <textarea
                name="description"
                id="input-textarea"
                placeholder="Local app manager...."
                rows="4"
                cols="50"
              ></textarea>

              <label htmlFor="tags">Tags</label>
              <input
                name="tags"
                type="text"
                placeholder="github, webapp, development, ..."
              />

              <div className="addTool">
                <button>Add tool</button>
              </div>
            </form>
          </div>
        </Modal>
      ) : null}

      <h1>VUTTR</h1>
      <strong>Very Useful Tools to Remember</strong>

      <div className="wrapper-form">
        <form>
          <input type="text" placeholder="pesquise por #tags" />
        </form>
        <button
          id="btn-add"
          type="button"
          onClick={() => setIsModalAddVisible(true)}
        >
          ADD
        </button>
      </div>

      {tools.length > 0 ? (
        tools.map((tool) => (
          <ul>
            <li key={tool._id}>
              <Content>
                <header>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    {tool.title}
                  </a>
                  <button
                    id="btn-remove"
                    onClick={() => setIsModalVisible(true)}
                  >
                    Remover
                  </button>
                </header>

                <p>{tool.description}</p>

                {tool.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </Content>
            </li>
          </ul>
        ))
      ) : (
        <>
          <img src={sad} alt="no-list" id="img-no-list" />
          <p id="p-no-list">Você não tem nenhuma ferramenta cadastrada</p>
        </>
      )}
    </Container>
  );
}
