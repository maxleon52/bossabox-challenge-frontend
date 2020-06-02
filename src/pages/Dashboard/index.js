import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";

import api from "../../services/api";

import sad from "../../assets/sad.svg";

import { Container, Content } from "./styles";

export default function Dashboard({ history }) {
  const [err, setErr] = useState("");
  const [tools, setTools] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

  //Estados dos INPUTs
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [searchTags, setSearchTags] = useState("");

  const [idDelete, setIdDelete] = useState();

  const [refreshTools, setRefreshTools] = useState(true);

  // Dados User
  const [userEmail, setUserEmail] = useState();

  // Cria um novo cadastro de ferramenta
  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const user_id = localStorage.getItem("user");

      const response = await api.post(
        "/tools",
        {
          title,
          link,
          description,
          tags,
        },
        { headers: { user_id } }
      );

      setIsModalAddVisible(false);
      setTitle("");
      setLink("");
      setDescription("");
      setTags("");
      setErr("");

      setTools([...tools, response.data]);
      setRefreshTools(true);
      history.push("/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
      setErr(error.response.data.message);
    }
  }

  // Abre modal de delete e repassa ID
  async function handleStates(_id) {
    setIsModalVisible(true);
    setIdDelete(_id);
  }

  // Deleta uma ferramenta
  async function handleDelete() {
    try {
      const { user_id } = localStorage.getItem("user");
      api.delete(`/tools/${idDelete}`, { headers: user_id });
      setIsModalVisible(false);
    } catch (error) {
      console.log(error.response.message);
    }
  }

  useEffect(() => {
    async function loadTools() {
      const user_id = localStorage.getItem("user");

      const response = await api.get("/tools", {
        headers: { user_id },
      });

      setTools(response.data);
    }

    if (isModalVisible === false) {
      loadTools();
    }
  }, [isModalVisible]);

  // Sair do sistema
  async function handleExit() {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("userEmail");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  // Pesquisa por tags
  async function handleSearch(event) {
    try {
      if (event.key === "Enter") {
        event.preventDefault();
        const user_id = localStorage.getItem("user");

        console.log("aqui é do localStorage: ", user_id);

        const response = await api.get("/tools-search", {
          headers: { user_id },
          params: { tag: searchTags },
        });

        console.log(response);
        setTools(response.data);
        setErr(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  // Pegar user logado e carregar ferramentas
  useEffect(() => {
    async function loadTools() {
      const user_id = localStorage.getItem("user");
      setUserEmail(localStorage.getItem("userEmail"));

      const response = await api.get("/tools", {
        headers: { user_id },
      });

      setTools(response.data);
    }

    if (refreshTools) {
      loadTools();
    }

    if (isModalVisible) {
      loadTools();
    }
  }, [isModalVisible, refreshTools]);

  // Limpa dados do formulário de ADD
  useEffect(() => {
    setTitle("");
    setLink("");
    setDescription("");
    setTags("");
    setErr("");
  }, [isModalAddVisible]);

  return (
    <Container>
      {/* Modal of the remove */}
      {isModalVisible ? (
        <Modal>
          <div className="confirmRemove">
            <header>
              <span className="title-remove">Remove tool</span>
            </header>
            <p>Deseja realmente deletar essa ferramenta?</p>

            <div className="confirmRemoveBtn">
              <button
                className="btn-cancel"
                onClick={() => setIsModalVisible(false)}
              >
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleDelete}>
                Yes, remove.
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {/* Modal of the ADD */}
      {isModalAddVisible ? (
        <Modal onClose={() => setIsModalAddVisible(false)}>
          <div className="content-add">
            {/* Erros */}
            {err ? (
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{ fontSize: "18px", color: "red", margin: "0 auto" }}
                >
                  {err}
                </h1>
              </div>
            ) : null}

            <header>
              <span className="title-add">Add new tool</span>
            </header>

            <form onSubmit={handleSubmit}>
              <label htmlFor="title">*Tool Name</label>
              <input
                name="title"
                type="text"
                placeholder="Tool"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <label htmlFor="link">*Tool Link</label>
              <input
                name="link"
                type="text"
                placeholder="https://github.com/typecode/hotel"
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />

              <label htmlFor="description">*Tool Description</label>
              <textarea
                name="description"
                id="input-textarea"
                placeholder="Local app manager...."
                rows="4"
                cols="50"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>

              <label htmlFor="tags">*Tags</label>
              <input
                name="tags"
                type="text"
                placeholder="github, webapp, development, ..."
                value={tags}
                onChange={(event) => setTags(event.target.value)}
              />

              <div className="addTool">
                <button type="submit">Add tool</button>
              </div>
            </form>
          </div>
        </Modal>
      ) : null}

      <div className="profile">
        <h1>VUTTR</h1>
        <div>
          <span>{userEmail}</span>
          <span onClick={handleExit} style={{ cursor: "pointer" }}>
            Sair
          </span>
        </div>
      </div>
      <strong>Very Useful Tools to Remember</strong>

      <div className="wrapper-form">
        <form>
          <input
            type="text"
            placeholder="pesquise por #tags"
            value={searchTags}
            onChange={(event) => setSearchTags(event.target.value)}
            onKeyPress={handleSearch}
          />
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
          <ul key={tool._id}>
            <li>
              <Content isVisible={isModalAddVisible}>
                <header>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    {tool.title}
                  </a>
                  <button
                    id="btn-remove"
                    onClick={() => handleStates(tool._id)}
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
          <p id="p-no-list" err={err}>
            {err || "Você não tem nenhuma ferramenta cadastrada"}
          </p>
        </>
      )}
    </Container>
  );
}
