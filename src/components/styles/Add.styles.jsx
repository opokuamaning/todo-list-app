import styled from "styled-components";

export const Main = styled.main`
  background-color: #58c48a;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  color: #ffffff;
  .add-todo {
    width: 400px;
    height: auto;
    min-height: 500px;
    background-color: #095014;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    gap: 20px;
    padding-bottom: 20px;
    .input-section {
      width: 90%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        color: #fff;
        background-color: transparent;
        border: 1px solid #58c48a;
        width: 75%;
        height: 90%;
        padding-left: 10px;
      }
      button {
        background-color: #58c48a;
        border: 1px solid #58c48a;
        width: 25%;
        height: 100%;
        color: #fff;
      }
    }
    .todo-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .item{
        background-color: #58c48a;
        width: 85%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-radius: 5px;
        .icons{
            display: flex;
            align-items: center;
            gap: 15px;
        }
      }
    }
  }
`;
