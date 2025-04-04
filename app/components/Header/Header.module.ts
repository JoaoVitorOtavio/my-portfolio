import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 50px;
  padding: 13px 0;
  border-bottom: 1px solid;
  border-color: #27272a;
  border-bottom-width: 1px;

  padding-left: 5%;
  padding-right: 5%;

  margin-bottom: 5rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin-bottom: 30px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const MobileMenu = styled.div`
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`;

interface SideMenuProps {
  $isopen?: boolean;
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
    props.$isopen ? 'translateX(0)' : 'translateX(100%)'};
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

export const DesktopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

interface IItemMenu {
  $isActive: boolean;
}

export const DesktopMenuItem = styled.p<IItemMenu>`
  color: ${(props) => (props.$isActive ? '#0cce6b' : '#fff')};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isActive ? '1px solid #3f3f46' : 'none')};

  &:hover {
    border-bottom: 1px solid #3f3f46;
    color: #0cce6b;
  }
`;
