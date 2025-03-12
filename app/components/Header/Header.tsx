'use client';
import { FaBars, FaUserTie, FaLaptopCode } from 'react-icons/fa6';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineRead } from 'react-icons/ai';
import {
  CloseContainer,
  ContentContainer,
  HeaderContainer,
  ItemTitle,
  MenuItemContainer,
  NavContainer,
  NavItems,
  NavTitle,
  SideMenu,
  SideMenuContent,
} from './Header.module';
import { useState } from 'react';

interface IMenuItem {
  id: number;
  title: string;
  icon: React.FC<{ size?: number; color?: string }>;
}

const menuItens: IMenuItem[] = [
  {
    id: 1,
    title: 'About',
    icon: FaUserTie,
  },
  {
    id: 2,
    title: 'Projects',
    icon: FaLaptopCode,
  },
  {
    id: 3,
    title: 'Blog',
    icon: AiOutlineRead,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <HeaderContainer>
      {/* Menu deslizante */}
      <SideMenu isopen={isOpen}>
        <CloseContainer onClick={() => setIsOpen(false)}>
          <IoCloseOutline size={25} />
        </CloseContainer>
        <SideMenuContent>
          {menuItens.map((item) => (
            <MenuItemContainer key={item.id}>
              <ItemTitle>
                <item.icon size={18} color={'#71717a'} />
                <p>{item.title}</p>
              </ItemTitle>
            </MenuItemContainer>
          ))}
        </SideMenuContent>
      </SideMenu>
      <ContentContainer>
        <p style={{ color: '#fff' }}>Image</p>
        <NavItems>
          <NavContainer>
            <NavTitle>About</NavTitle>
            <NavTitle>Projects</NavTitle>
            <NavTitle>Blog</NavTitle>
          </NavContainer>
        </NavItems>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '25%',
            backgroundColor: '#27272b66',
            padding: '8px',
          }}
        >
          <FaBars size={16} />
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
