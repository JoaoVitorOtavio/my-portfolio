'use client';

import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import {
  CalendarContainer,
  ContentContainer,
  MainContainer,
  Title,
  YearButton,
  YearsContainer,
} from './GitHubContributions.module';

export const github: { light: string[]; dark: string[] } = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const GitHubContributions = () => {
  const startYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(startYear);

  const handleYearChange = (year: number) => {
    setYear(year);
  };

  const [hasData, setHasData] = useState<boolean | null>(null);
  console.log('HASDATA', hasData);

  useEffect(() => {
    setHasData(null);
    fetch(
      `https://github-contributions-api.jogruber.de/v4/JoaoVitorOtavio?y=${year}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.weeks && data.weeks.length > 0) {
          setHasData(true);
        } else {
          setHasData(false);
        }
      })
      .catch(() => setHasData(false));
  }, [year]);

  function renderGitHubCalendar() {
    if (hasData === null) {
      return <p>Carregando atividade do GitHub...</p>; // loading
    }

    if (!hasData) {
      return (
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
          momento, ele não pôde ser carregado — isso pode acontecer se a API do
          GitHub estiver fora do ar. Você ainda pode conferir meus repositórios
          diretamente em -{' '}
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
          .
        </p>
      );
    }

    return (
      <GitHubCalendar
        theme={github}
        colorScheme="dark"
        username="gaearon"
        blockSize={15}
        blockMargin={5}
        year={year}
      />
    );
  }

  return (
    <MainContainer>
      <Title>Gráfico de Contribuição</Title>
      <ContentContainer>
        {/* TODO: Adicionar suspense para só exibir depois de carregado */}
        <CalendarContainer>{renderGitHubCalendar()}</CalendarContainer>
        <YearsContainer>
          {[...Array(5)].map((_, i) => (
            <YearButton
              key={i}
              $isactivated={year === startYear - i}
              onClick={() => handleYearChange(startYear - i)}
            >
              {startYear - i}
            </YearButton>
          ))}
        </YearsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default GitHubContributions;
