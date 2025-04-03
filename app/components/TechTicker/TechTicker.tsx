import Image from 'next/image';
import icons from '../../assets/icons/icons';
import {
  ContentContainer,
  Item,
  LineWrapper,
  MarqueeInner,
  RunningLine,
} from './TechTicker.module';

const TechTicker = () => {
  const frontTechnologies: { name: string; icon: string }[] = [
    { name: 'React.js', icon: icons.react },
    { name: 'TypeScript', icon: icons.typescript },
    { name: 'NextJS', icon: icons.nextjs },
    { name: 'Redux', icon: icons.redux },
    { name: 'Styled components', icon: icons.styledcomponents },
    { name: 'Storybook', icon: icons.storybook },
    { name: 'React Query', icon: icons.reactquery },
    { name: 'MySQL', icon: icons.mysql },
    { name: 'PostgreSQL', icon: icons.postgresql },
    { name: 'Git', icon: icons.git },
  ];
  const backTechologies: { name: string; icon: string }[] = [
    { name: 'Node.js', icon: icons.nodejs },
    { name: 'Express.js', icon: icons.express },
    { name: 'Nest.js', icon: icons.nestjs },
    { name: 'Sequelize', icon: icons.sequelize },
    { name: 'Prisma', icon: icons.prisma },
    { name: 'Firebase', icon: icons.firebase },
    { name: 'Docker', icon: icons.docker },
    { name: 'GitHub', icon: icons.github },
    { name: 'Jest', icon: icons.jest },
    { name: 'Swagger', icon: icons.swagger },
  ];

  return (
    <ContentContainer>
      <LineWrapper>
        <RunningLine type="front">
          <MarqueeInner>
            {frontTechnologies.concat(frontTechnologies).map((tech, index) => (
              <Item key={index}>
                <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                {tech.name}
              </Item>
            ))}
          </MarqueeInner>
        </RunningLine>
      </LineWrapper>
      <LineWrapper>
        <RunningLine type="back">
          <MarqueeInner>
            {backTechologies.concat(backTechologies).map((tech, index) => (
              <Item key={index}>
                <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                {tech.name}
              </Item>
            ))}
          </MarqueeInner>
        </RunningLine>
      </LineWrapper>
    </ContentContainer>
  );
};

export default TechTicker;
