'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import {
  AboutContainer,
  ContentContainer,
  Description,
  DescriptionAndIcon,
  DescriptionCardContainer,
  Emphasis,
  LetsTalkContainer,
  Main,
  PhotoContainer,
  SocialIcon,
  SocialLinks,
  SocialLinksContainer,
  Title,
  TitleAndImageContainer,
} from './page.module';
import { socialLinks } from './data/social';
import { Works } from './data/works';
import GitHubContributions from './components/GitHubContributions/GitHubContributions';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Icons from './assets/icons/tecs-icons';
import TechTicker from './components/TechTicker/TechTicker';
import CardDescription from './components/CardDescription/CardDescription';

export default function Home() {
  useEffect(() => {
    document.title = 'João Vitor Otavio | Desenvolvedor';
  }, []);

  return (
    <>
      <Main>
        <TitleAndImageContainer>
          <ContentContainer>
            <PhotoContainer>
              <Image
                src="/me.jpg"
                alt="Me"
                height={200}
                width={200}
                priority={true}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </PhotoContainer>
            <DescriptionAndIcon>
              <AboutContainer>
                <Title>
                  <Emphasis $color="#0cce6b">Desenvolvedor Full Stack</Emphasis>{' '}
                  React | Node.js | Next.js | TypeScript
                </Title>
                <Description>
                  Olá! Me chamo <Emphasis>João Vitor</Emphasis> e sou um{' '}
                  <Emphasis>desenvolvedor Full Stack</Emphasis> apaixonado por
                  tecnologia e pela criação de{' '}
                  <Emphasis>soluções eficientes e escaláveis.</Emphasis>
                </Description>
                <DescriptionCardContainer>
                  <CardDescription
                    title={'DESENVOLVIMENTO WEB'}
                    description={
                      <>
                        Tenho experiência com{' '}
                        <Emphasis>React, Next.js e Node.js</Emphasis>, atuando
                        no desenvolvimento de:
                      </>
                    }
                    topics={[
                      'E-commerces',
                      'Backoffices',
                      'Integrações com marketplaces',
                    ]}
                  />
                  <CardDescription
                    title={'APLICAÇÕES MOBILE'}
                    description={
                      <>
                        Além do desenvolvimento web, também trabalhei com{' '}
                        <Emphasis>React Native</Emphasis>, criando:
                      </>
                    }
                    topics={[
                      'Portais administrativos',
                      'Aplicações mobile para diversos segmentos',
                    ]}
                  />
                  <CardDescription
                    title={'BACKEND E BANCO DE DADOS'}
                    description={
                      <>Já desenvolvi aplicações robustas utilizando:</>
                    }
                    topics={[
                      'NestJS, Sequelize, Prisma e PostgresSQL',
                      'Boas práticas de código',
                      'Testes automatizados (Jest)',
                    ]}
                  />
                  <CardDescription
                    title={'MEU DIFERENCIAL'}
                    description={<></>}
                    topics={[
                      'Sou movido por desafios',
                      'Aprendizado constante',
                      'Apaixonado por ajudar pessoas',
                    ]}
                  />
                </DescriptionCardContainer>
                <LetsTalkContainer>
                  <p>🚀 Sempre aberto a novas conexões e oportunidades!</p>
                  <Emphasis $color="#0cce6b">VAMOS CONVERSAR ?</Emphasis>
                </LetsTalkContainer>
                <SocialLinksContainer>
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
                </SocialLinksContainer>
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
