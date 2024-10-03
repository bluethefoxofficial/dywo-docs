import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: ${props => props.theme.layout.sidebarWidth};
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.space.medium};
  border-right: 1px solid ${props => props.theme.colors.border};
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${props => props.theme.space.small};
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: ${props => props.theme.space.small};
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius.small};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
  }

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledNavLink exact to="/">Home</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/installation">Installation</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/getting-started">Getting Started</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/commands">Commands</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/configuration">Configuration</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/templates">Templates</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/advanced">Advanced Usage</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/troubleshooting">Troubleshooting</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;