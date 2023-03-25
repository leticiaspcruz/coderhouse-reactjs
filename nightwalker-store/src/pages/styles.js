import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    gap: 32px;
    align-items: center;
    justify-content: center;
    margin: 100px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled.h1`
    margin-top: 50px;
    text-align: center;
`;

export const CartButton = styled.button`
  font-size: 12px;
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
  background: #73777B;
  border-radius: 999px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  margin: 0px 12px;

  :hover {
    background: #413F42;  
  }
`;

export const CartButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 12px;
`;

export const CartButtonAlt = styled.button`
  font-size: 12px;
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
  margin: 0px;

  :hover {
    background: #e74c3c;  
  }
`;

export const CheckoutText = styled.h2`
    font-size: 24px;
`;