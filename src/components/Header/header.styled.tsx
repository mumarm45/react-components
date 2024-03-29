import styled from 'styled-components';
import homeIcon from '../../assets/images/logo.png';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Logo = styled.div`
  ${({ theme: t }) => {
    return `margin-top: ${t.space[8]}px; 
    height: ${t.sizes[48]}px;
    width: ${t.sizes[48]}px;
    `;
  }};
  background-image: url(${homeIcon});
  background-size: contain;
  border-radius: 50%;
`;
export const Links = styled.div`
  display: flex;
`;

export const A = styled.a`
  text-decoration: none;
  padding: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 5px;
  border: none;
  color: ${({ theme: t }) => {
    return t.colors.text;
  }};
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
