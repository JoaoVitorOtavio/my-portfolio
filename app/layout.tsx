'use client';
import StyledComponentsRegistry from './registry';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <Header />
            <main>{children}</main>
            <Footer />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
