import styled from "styled-components";
import bannerImage from "../../assets/banner.jpeg";

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    width: 100%;
    height: 400px;
    background: url(${bannerImage});
    background-size: cover;
    background-position: center;
    justify-content: flex-end;
`;

export const LogoImage = styled.img`
  width: 40%;
  margin: 0px 12px;
`;