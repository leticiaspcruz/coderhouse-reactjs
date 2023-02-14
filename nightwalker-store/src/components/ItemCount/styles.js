import styled from 'styled-components';

export const ItemCounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 12px 0px;
  color: #F1F1F1;
  justify-content: center;
  align-items: center;
`;

export const CounterButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  background: transparent;
  border-radius: 999px;
  box-sizing: border-box;
  cursor: pointer;
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

  :hover {
    background: 
      linear-gradient(to right, #000000, #0a0a0a, #121212, #181818, #1d1d1d);  
  }
`;