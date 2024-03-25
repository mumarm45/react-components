import React, { useContext, useMemo } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { A, Button, Links, Logo, Nav } from './header.styled';
import CurrentThemeContext from '../ThemeProvider/CurrentThemeContext';
import { StyledIcon } from '../Icons/StyledIcon';

export const Header = () => {
  const { currentTheme, setCurrentTheme } = useContext(CurrentThemeContext);
  const isDarkThemeActive = useMemo(() => currentTheme === 'dark', [currentTheme]);
  const changeThemeMode = () => {
    setCurrentTheme(isDarkThemeActive ? 'light' : 'dark');
  };
  return (
    <Nav>
      <Logo />
      <Links>
        <A>Home</A>
        <A>Resources</A>
        <A>About us</A>
      </Links>

      <Button onClick={changeThemeMode}>
        <StyledIcon>
          <>{isDarkThemeActive ? <CiDark /> : <MdDarkMode />}</>
        </StyledIcon>
      </Button>
    </Nav>
  );
};
