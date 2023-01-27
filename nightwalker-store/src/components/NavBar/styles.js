import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 5rem;
  z-index: 10;
`;

export const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #c00000;
  }
  :hover {
    color: #e74c3c;

  }
`;

export const MobileNavIcon = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 120px;
`;

export const CartWidget = styled(AiOutlineShoppingCart)`
  color: 'white';
`;