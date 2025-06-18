'use client';

import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import {
  CalendarContainer,
  ContentContainer,
  MainContainer,
  Title,
  YearButton,
  YearsContainer,
} from './GitHubContributions.module';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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

  return (
    <MainContainer>
      <Title>Gráfico de Contribuição</Title>
      <ContentContainer>
        <CalendarContainer>
          <ErrorBoundary>
            <GitHubCalendar
              theme={github}
              colorScheme="dark"
              username="JoaoVitorOtavio"
              blockSize={15}
              blockMargin={5}
              year={year}
              throwOnError={true}
            />
          </ErrorBoundary>
        </CalendarContainer>
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
