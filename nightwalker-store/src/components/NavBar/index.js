import React, { useContext, useEffect, useState } from "react";
import {
  Nav,
  NavItem,
  MobileNavIcon,
  NavMenu,
  Logo,
  CartWidget,
} from './styles';
import logoImage from '../../assets/logo.png';
import { CartContext } from '../../context/CartProvider';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);
  const [showCartProductsNumber, setShowCartProductsNumber] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setShowCartProductsNumber(true)
    }
  }, [totalItems]);

  const items = [
    {text: "início", href: '/', activeStyle: true}, 
    {text: "categorias", href: '/category', activeStyle: true}, 
    {text: "produtos", href: '/products', activeStyle: true},
    {
      text: "", 
      href: '/cart',
      activeStyle: true, 
      total: showCartProductsNumber ? totalItems : ' ',
      icon: <CartWidget />, 
    }    
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
            {item.total}
          </NavItem>))}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;