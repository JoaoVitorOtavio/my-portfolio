import React from 'react';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <p
            style={{
              textAlign: 'center',
              lineHeight: '1.6',
              fontSize: '16px',
              backgroundColor: '#1f1f1f',
              color: '#e0e0e0',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #333',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            O gráfico abaixo exibe minhas contribuições públicas no GitHub. No
            momento, ele não pôde ser carregado — isso pode acontecer se a API
            do GitHub estiver fora do ar. Você ainda pode conferir meus
            repositórios diretamente em -{' '}
            <a
              href="https://github.com/JoaoVitorOtavio"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#58a6ff',
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              github.com/JoaoVitorOtavio
            </a>
          </p>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
