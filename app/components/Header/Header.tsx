'use client';

import Link from 'next/link';
import { FaBars, FaUserTie } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineRead } from 'react-icons/ai';
import {
  CloseContainer,
  ContentContainer,
  DesktopContainer,
  DesktopMenuItem,
  HeaderContainer,
  ItemTitle,
  MenuItemContainer,
  MobileMenu,
  SideMenu,
  SideMenuContent,
} from './Header.module';
import { useState } from 'react';

interface IMenuItem {
  id: number;
  title: string;
  icon: React.FC<{ size?: number; color?: string }>;
  href: string;
}

const menuItens: IMenuItem[] = [
  {
    id: 0,
    title: 'Home',
    icon: FaHome,
    href: '/',
  },
  {
    id: 1,
    title: 'About',
    icon: FaUserTie,
    href: '/about',
  },
  // {
  //   id: 2,
  //   title: 'Projects',
  //   icon: FaLaptopCode,
  // },
  {
    id: 3,
    title: 'Blog',
    icon: AiOutlineRead,
    href: '/blog',
  },
];

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MobileMenu>
      <SideMenu $isopen={isOpen}>
        <CloseContainer onClick={() => setIsOpen(false)}>
          <IoCloseOutline size={25} />
        </CloseContainer>
        <SideMenuContent>
          {menuItens.map((item) => (
            <Link prefetch={false} href={item.href} key={item.id}>
              <MenuItemContainer onClick={() => setIsOpen(false)}>
                <ItemTitle>
                  <item.icon size={18} color={'#71717a'} />
                  <p>{item.title}</p>
                </ItemTitle>
              </MenuItemContainer>
            </Link>
          ))}
        </SideMenuContent>
      </SideMenu>
      <ContentContainer>
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
    </MobileMenu>
  );
};

const DesktopMenu = () => {
  // TOOD: Item do menu ativado dependendo da pagina #0cce6b
  return (
    <DesktopContainer>
      {menuItens.map((item) => (
        <DesktopMenuItem key={item.id}>
          <Link prefetch={false} href={item.href}>
            {item.title}
          </Link>
        </DesktopMenuItem>
      ))}
    </DesktopContainer>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <MenuMobile />
      <DesktopMenu />
    </HeaderContainer>
  );
};

export default Header;
