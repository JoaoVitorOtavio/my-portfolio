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
  TitleAndPhotoBackgroundImage,
  Title,
  TitleAndImageContainer,
  TitleAndPhotoContainer,
  LetsTalkText,
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
            <DescriptionAndIcon>
              <AboutContainer>
                <TitleAndPhotoContainer>
                  <TitleAndPhotoBackgroundImage />
                  <Title>
                    <Emphasis $color="#0cce6b">
                      Desenvolvedor Full Stack
                    </Emphasis>{' '}
                    React | Node.js | Next.js | TypeScript
                  </Title>
                  <PhotoContainer>
                    <Image
                      src="/me.jpg"
                      alt="Me"
                      height={250}
                      width={250}
                      priority={true}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </PhotoContainer>
                </TitleAndPhotoContainer>
                <Description>
                  Olá! Me chamo <Emphasis>João Vitor</Emphasis> e sou um{' '}
                  <Emphasis>desenvolvedor Full Stack</Emphasis> apaixonado
                  <br />
                  por tecnologia e pela criação de{' '}
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
                      'Marketplace',
                      'Backoffice',
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
                      'Sistema de chat com comunicação em tempo real',
                      'Trilhas educativas com integração de vídeos e artigos',
                      'Aplicativos voltados à saúde e qualidade do sono',
                    ]}
                  />
                  <CardDescription
                    title={'BACKEND E BANCO DE DADOS'}
                    description={
                      <>Já desenvolvi aplicações robustas utilizando:</>
                    }
                    topics={[
                      'NestJS, Sequelize, NodeJS, Prisma e PostgresSQL/MySQL',
                      'Boas práticas de código',
                      'Testes automatizados (Jest)',
                    ]}
                  />
                  <CardDescription
                    title={'MEU DIFERENCIAL'}
                    description={
                      <>
                        Na área de tecnologia,{' '}
                        <Emphasis>procuro sempre exercer empatia</Emphasis>, me
                        colocando no lugar dos outros para{' '}
                        <Emphasis>colaborar melhor</Emphasis>, entender
                        necessidades e{' '}
                        <Emphasis>construir soluções mais humanas.</Emphasis>
                      </>
                    }
                    topics={[
                      'Sou movido por desafios',
                      'Aprendizado constante',
                      'Apaixonado por ajudar pessoas',
                    ]}
                  />
                </DescriptionCardContainer>
                <LetsTalkContainer>
                  <LetsTalkText>
                    🚀 Sempre aberto a novas conexões e oportunidades!
                  </LetsTalkText>
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
