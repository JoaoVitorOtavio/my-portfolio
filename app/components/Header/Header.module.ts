import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 50px;

  border-bottom: 1px solid;
  border-color: #27272a;
  border-bottom-width: 1px;

  padding-left: 5%;
  padding-right: 5%;

  margin-bottom: 5rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    background-color: #27272a;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    background-color: yellow;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    background-color: green;
  }
`;

interface SideMenuProps {
  isopen: boolean;
}

export const SideMenu = styled.div<SideMenuProps>`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #18181b;
  color: #fff;
  transform: ${(props) =>
    props.isopen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s ease-in-out;
`;

export const SideMenuContent = styled.div`
  padding-top: 50px;
`;

export const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  top: -8px;
  right: 3px;
  margin: 15px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #27272b66;
  padding: 8px;
`;

export const MenuItemContainer = styled.div`
  padding: 24px;

  border-bottom: 1px solid #27272a;
`;

export const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  font-size: 18px;
`;

export const ContentContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItems = styled.nav`
  display: none;
`;

export const NavContainer = styled.ul`
  display: flex;
  column-gap: 2rem;
`;

export const NavTitle = styled.li`
  color: #fff;
`;
