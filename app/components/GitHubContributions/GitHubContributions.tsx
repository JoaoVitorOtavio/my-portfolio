import GitHubCalendar from 'react-github-calendar';
import { CalendarContainer, Title } from './GitHubContributions.module';

export const github: { light: string[]; dark: string[] } = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const GitHubContributions = () => {
  return (
    <div>
      <Title>Gráfico de Contribuição</Title>
      <CalendarContainer>
        <GitHubCalendar
          theme={github}
          colorScheme="dark"
          username="JoaoVitorOtavio"
          blockSize={13}
        />
      </CalendarContainer>
    </div>
  );
};

export default GitHubContributions;
