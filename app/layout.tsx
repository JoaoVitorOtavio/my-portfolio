'use client';
import StyledComponentsRegistry from './registry';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';

const Footer = dynamic(() => import('./components/Footer/Footer'), {
  ssr: true,
});
const Header = dynamic(() => import('./components/Header/Header'), {
  ssr: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [hydrated, setHydrated] = useState(false);

  // useEffect(() => {
  //   setHydrated(true);
  // }, []);

  // if (!hydrated) return null;

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Header />
            <main
              style={{
                maxWidth: '80rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5%',
                paddingRight: '5%',
                width: '90%',
              }}
            >
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
