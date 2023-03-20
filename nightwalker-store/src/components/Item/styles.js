import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0px;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
    margin: 12px;
    width: 200px;
    height: 150px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 8px;
  object-fit: fill;
`;