import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin: 50px;
    text-align: center;
`;

export const Content = styled.div`
  margin: 32px;
  padding: 32px;
  border-radius: 8px;
  background-color: #141414;
  box-shadow: -1px 2px 16px #2a2a2a;

  :hover{
    background-color: #c00000;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
`;