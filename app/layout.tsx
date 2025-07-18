'use client';
import StyledComponentsRegistry from './registry';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import dynamic from 'next/dynamic';
import { Inter, Poppins } from 'next/font/google';
// import { useEffect, useState } from 'react';

const Footer = dynamic(() => import('./components/Footer/Footer'), {
  ssr: true,
});
const Header = dynamic(() => import('./components/Header/Header'), {
  ssr: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
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
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
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
