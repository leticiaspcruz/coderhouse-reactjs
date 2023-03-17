import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const CarouselButton = styled.button`
  background-color: transparent;
  color: red;
  font-size: 3rem;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #888;
  }

  &:active {
    transform: scale(0.9);
  }
`;