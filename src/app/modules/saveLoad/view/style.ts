import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  
  .error{
    top: 41px;
    width: 322px;
    position: absolute;
    color: red;
  }
  
  >label {
    border-radius: 10px;
    border: none;
    padding: 6px 15px;
    font-size: 16px;
    background-color: darkcyan;
    color: bisque;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 18.4px;

    transition: 200ms;

    &:hover {
      background-color: #026464;
    }
  }
  
  input {
    display: block;
    height: 0;
    position: absolute;
    z-index: 0;
    opacity: 0;
    width: 0;
  }
`;