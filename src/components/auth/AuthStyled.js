import styled from "styled-components";

export const AuthContainer = styled.div`
  .user-form {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 16px;
  }

  .user-label {
    position: relative;
    margin-bottom: 8px;
    /* padding-top: 8px; */
  }

  .user-input {
    height: 30px;
    width: 100%;
    outline: none;
    padding-left: 8px;
    height: 30px;
    border: 1px solid cornflowerblue;
  }

  .user-input:focus + .icon-user,
  .user-input:not(:placeholder-shown) + .icon-user {
    opacity: 0;
  }

  .user-input:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }

  .user-input:focus::placeholder {
    opacity: 0;
  }
  .user-input::placeholder {
    color: cornflowerblue;
    padding-left: 25px;
    font-size: 14px;
    transition: opacity 300ms linear;
  }

  .icon-user {
    position: absolute;
    bottom: 20px;
    left: 16px;
    width: 12px;
    height: 12px;
    fill: cornflowerblue;
    transition: opacity 300ms linear;
  }

  .user-button {
    /* font-size: ${(props) => (props.length > 12 ? "8px" : "16px")}; */
    align-self: center;
    text-align: center;
    /* width: 120px; */
  }
`;
