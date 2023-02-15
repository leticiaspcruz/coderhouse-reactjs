import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 42px;
    justify-content: center;
    align-items: center;
    margin: 32px;
    text-align: center;
`;

export const Wrapper = styled.div`
  margin: 50px;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  margin: 32px !important;
`;

export const Title = styled.h1`
  left: 50%;
`;

export const Text = styled.p`
  margin: 0px;

  :hover {
    color: #c00000;
    cursor: pointer;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
`;