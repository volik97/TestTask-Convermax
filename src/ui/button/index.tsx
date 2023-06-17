import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 6px 15px;
  font-size: 16px;
  background-color: darkcyan;
  color: bisque;
  cursor: pointer;

  transition: 200ms;

  &:hover {
    background-color: #026464;
  }

  &:disabled {
    background-color: gray;
    cursor: default;

  }
`;