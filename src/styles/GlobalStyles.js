import { createGlobalStyle } from "styled-components";
// import vBackbround from "../assets/letter-v.svg";
// import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  
  button{
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }

  html, body, #root{
    min-height:100%;
  }

  ul{
    list-style: none;
  }

  body{
    font-size: 14px;
    background-color:#ddd;
    /* background-size: cover; */
    -webkit-font-smoothing: antialiased !important;
  }
`;
