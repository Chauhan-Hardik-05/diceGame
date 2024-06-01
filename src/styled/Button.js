import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  border: 1px solid transparent;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background-color ease-in;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;

// copy Button css in OutlineBtn
export const OutlineBtn = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;
  }
`;
