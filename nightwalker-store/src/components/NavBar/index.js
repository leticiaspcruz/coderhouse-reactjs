import React from "react";
import {
  Nav,
  NavItem,
  MobileNavIcon,
  NavMenu,
  Logo
} from './styles';
import logoImage from '../../assets/logo.png';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavItem to='/'>
          <Logo src={logoImage} alt='Logo da Nightwalker Store' />
        </NavItem>
        <MobileNavIcon />
        <NavMenu>
          <NavItem to='/about' activeStyle>
            sobre a loja
          </NavItem>
          <NavItem to='/sale' activeStyle>
            promoções
          </NavItem>
          <NavItem to='/tshirts' activeStyle>
            camisetas
          </NavItem>
          <NavItem to='/acessories' activeStyle>
            acessórios
          </NavItem>
          <NavItem to='/contact' activeStyle>
            contato
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;