'use client';
import StyledComponentsRegistry from './registry';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import dynamic from 'next/dynamic';
import Header from './components/Header/Header';

const Footer = dynamic(() => import('./components/Footer/Footer'), {
  ssr: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
