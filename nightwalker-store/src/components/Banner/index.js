import React from "react";
import { Container, LogoImage } from './styles';
import logoImage from '../../assets/logo.png';

const Banner = () => {
  return (
     <Container>
      <LogoImage src={logoImage} />
     </Container>
  );
};

export default Banner;