import styled from "styled-components";
import cancel from "../../assets/cancel.svg";
import add from "../../assets/add.svg";

export const Container = styled.div`
  .modalBackground {
    display: flex;

    /* justify-content: center;
    align-items: center; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-x: hidden;
  }

  .confirmRemove {
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 8px;

    width: 470px;
    height: 120px;
    background-color: #fff;

    header {
      display: flex;
      justify-content: left;
      align-items: flex-start;
      width: 100%;

      .title-remove {
        width: 100px;
        margin-left: 10px;
        background: #fff url(${cancel}) no-repeat 1px center;
        background-size: 10px;
        padding-left: 20px;
        border: none;
      }
    }
    p {
      margin-left: 10px;
      margin-top: 20px;
    }

    .confirmRemoveBtn {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
      margin-top: 16px;

      .btn-cancel,
      .btn-confirm {
        width: 100px;
        height: 35px;
        border: 2px solid;
      }

      .btn-cancel {
        margin-right: 30px;
      }
    }
  }

  /* CSS modal -add */
  .content-add {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 8px;

    width: 570px;
    height: 550px;
    background-color: #fff;

    header {
      display: flex;
      justify-content: left;
      align-items: flex-start;
      width: 100%;
      margin-top: 16px;

      .title-add {
        width: 200px;
        margin-left: 10px;
        background: #fff url(${add}) no-repeat 1px center;
        background-size: 10px;
        padding-left: 20px;
        border: none;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 16px;
      padding: 8px;

      label {
        font-size: 16px;
        color: #000;
        padding: 8px 8px 8px 0;
      }

      input {
        height: 35px;
        padding: 8px;
      }

      textarea {
        height: 150px;
        resize: none;
        padding: 8px;
      }

      .addTool {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 16px;

        button {
          width: 100px;
          height: 30px;
          border: 1px solid;
        }
      }
    }
  }
`;
