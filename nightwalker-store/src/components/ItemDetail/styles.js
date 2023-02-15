import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px 0px;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
    margin: 12px;
    width: 200px;
    height: auto;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  object-fit: fill;
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 50px;
`;

export const Wrapper = styled.div`
  margin: 50px;
`;

export const Text = styled.p`
  margin: 24px;
  text-align: left;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  background: #C00000;
  border-radius: 999px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 32px;

  :hover {
    background: #e74c3c;  
  }
`;