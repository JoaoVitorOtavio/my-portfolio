'use client';

import {
  AboutContainer,
  ContentContainer,
  Description,
  DescriptionAndIcon,
  Main,
  SocialIcon,
  SocialLinks,
  Title,
  TitleAndImageContainer,
} from './page.module';
import { socialLinks } from './data/social';
import { Works } from './data/works';
import GitHubContributions from './components/GitHubContributions/GitHubContributions';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Icons from './assets/icons/tecs-icons';
import TechTicker from './components/TechTicker/TechTicker';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'João Vitor Otavio | Desenvolvedor';
  }, []);

  return (
    <>
      <Main>
        <TitleAndImageContainer>
          <ContentContainer>
            <DescriptionAndIcon>
              <AboutContainer>
                <Title>
                  Desenvolvedor Full Stack | React | Node.js | Next.js |
                  TypeScript
                </Title>
                <Description>
                  Olá! Me chamo João Vitor e sou um desenvolvedor Full Stack
                  apaixonado por tecnologia e pela criação de soluções
                  eficientes e escaláveis.
                  <br />
                  Tenho experiência com React, Next.js e Node.js, atuando no
                  desenvolvimento de e-commerces, backoffices e integrações com
                  marketplaces, sempre focado em performance, escalabilidade e
                  experiência do usuário. Além do desenvolvimento web, também
                  trabalhei com React Native, criando portais administrativos e
                  aplicações mobile para diversos segmentos.
                  <br />
                  No backend, já desenvolvi aplicações robustas utilizando
                  NestJS, Sequelize, Prisma e PostgreSQL, sempre aplicando boas
                  práticas de código, testes automatizados (Jest) e arquitetura
                  escalável.
                  <br />
                  Sou movido por desafios e estou constantemente aprendendo
                  novas tecnologias para aprimorar minhas habilidades. Acredito
                  que um bom desenvolvedor vai além do código: entender o
                  negócio e entregar soluções estratégicas e eficazes faz toda a
                  diferença.
                  <br />
                  <br />
                  🚀 Sempre aberto a novas conexões e oportunidades!
                </Description>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {socialLinks.map((social) => (
                    <SocialLinks
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon as={social.icon} size={20} />{' '}
                      {/* <social.icon size={20} style={{ color: '#71717a' }} /> */}
                      {social.name}
                    </SocialLinks>
                  ))}
                </div>
              </AboutContainer>
            </DescriptionAndIcon>
            <Icons />
            <TechTicker />
          </ContentContainer>
        </TitleAndImageContainer>
        <GitHubContributions />
        <Title>Experiência de trabalho</Title>
        {Works.map((item, index) => (
          <WorkExperience
            key={index}
            enterpriseName={item.enterpriseName}
            description={item.description}
            imagePath={item.imagePath}
            role={item.role}
            time={item.time}
            isTheFirst={item.isTheFirst}
            link={item.link}
          />
        ))}
      </Main>
    </>
  );
}
