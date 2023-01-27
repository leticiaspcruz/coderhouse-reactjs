import React from "react";
import {
  Nav,
  NavItem,
  MobileNavIcon,
  NavMenu,
  Logo,
  CartWidget,
} from './styles';
import logoImage from '../../assets/logo.png';

const NavBar = () => {

  const items = [
    {text: "sobre a loja", href: '/about', activeStyle: true},
    {text: "promoções", href: '/sale', activeStyle: true}, 
    {text: "camisetas", href: '/tshirts', activeStyle: true},
    {text: "acessórios", href: '/acessories', activeStyle: true},
    {text: "contato", href: '/contact', activeStyle: true},
    {text: "", href: '/cart', activeStyle: true, icon: <CartWidget />}    
  ];

  return (
    <>
      <Nav>
        <NavItem to='/'>
          <Logo src={logoImage} alt='Logo da Nightwalker Store' />
        </NavItem>
        <MobileNavIcon />
        <NavMenu>
        {items.map((item) => (
          <NavItem 
            to={item.href}
            activeStyle={item.activeStyle}
          >
            {item.text}
            {item.icon}
          </NavItem>))}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;