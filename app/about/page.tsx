'use client';

import { BiLogoGithub, BiLogoLinkedinSquare, BiMailSend } from 'react-icons/bi';
import {
  ButtonContainer,
  ContainerDescription,
  CVButton,
  Description,
  ImageContainer,
  MenuItems,
  SocialContainer,
  TiltedImage,
  Title,
  MenuContainer,
  DescriptionContainer,
  WorkDescription,
  WorkTitleAndTime,
  TimeDescription,
  TechItem,
  ItemContainer,
} from './about.module';
import Image from 'next/image';
import { IoMdCloudDownload } from 'react-icons/io';
import { Works } from '../data/works';
import { useEffect, useState } from 'react';

export default function About() {
  // TODO: Parte para livros

  const [enterprise, setEnterprise] = useState<string>(Works[0].enterpriseName);

  useEffect(() => {
    document.title = 'Sobre | João Vitor Otavio';
  }, []);

  const handleEnterpriseName = (enterpriseName: string) => {
    const nameLength = enterpriseName.length;
    return nameLength > 15
      ? `${enterpriseName.slice(0, 15)}...`
      : enterpriseName;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Curriculo-Joao-Vitor-Otavio.pdf';
    link.download = 'Curriculo-Joao-Vitor-Otavio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ContainerDescription>
        <div style={{ width: '100%' }}>
          <Title>
            Olá! Eu sou João Vitor, um desenvolvedor full stack apaixonado pela
            programação.
          </Title>
          <Description>
            💻 Desenvolvedor Full Stack | React | Node.js | Next.js | TypeScript
            <br />
            <br />
            Sou um desenvolvedor full stack apaixonado por tecnologia e por
            transformar ideias em soluções eficientes e escaláveis. A
            programação me abriu muitas portas e, hoje, não consigo me imaginar
            sem ela na minha vida. Cada linha de código representa não apenas um
            desafio superado, mas também uma oportunidade de crescimento pessoal
            e profissional. Com experiência em React, Next.js e Node.js,
            participei do desenvolvimento de e-commerces, backoffices e
            integrações com marketplaces, sempre focando em performance e na
            melhor experiência para o usuário. Além do desenvolvimento web,
            tenho vivência em aplicações mobile com React Native, portais
            administrativos e soluções voltadas para diferentes segmentos.
            Trabalhei com tecnologias como NestJS, Sequelize, Prisma e
            PostgreSQL, valorizando boas práticas de código, testes
            automatizados (Jest) e arquitetura escalável. Mas não é só sobre
            código. Acredito que um bom desenvolvedor vai além da tecnologia:
            entender o negócio e entregar soluções que realmente fazem a
            diferença é o que me move.
            <br />
            <br />
            🎶 Fora das Linhas de Código Quando não estou programando, minha
            vida gira em torno de pequenas paixões que mantêm minha mente afiada
            e meu coração leve. Sou apaixonado por música e não consigo passar
            um dia sem ouvir um som — seja tocando violão ou guitarra, seja
            apenas curtindo minhas playlists favoritas. Também gosto de andar de
            bicicleta e mergulhar em um bom livro, momentos que me ajudam a
            renovar as energias e estimular a criatividade. Minha família é
            minha base e minha maior motivação. Sem eles, nada disso seria
            possível. É essa combinação de paixão pela tecnologia e o apoio
            incondicional dos que amo que me impulsiona a ser melhor a cada dia.
            <br />
            <br />
            🚀 Sempre aberto a novos desafios, conexões e oportunidades para
            continuar evoluindo.
          </Description>
        </div>
        <ImageContainer>
          <TiltedImage>
            <Image
              src="/me.jpg"
              alt="Me"
              fill
              priority={true}
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </TiltedImage>
          <ButtonContainer>
            <CVButton onClick={handleDownload}>
              {/* TODO: colocar o CV para baixar */}
              Baixar CV <IoMdCloudDownload size={20} />
            </CVButton>
          </ButtonContainer>
          <SocialContainer
            href="https://www.linkedin.com/in/joaovitorotavio"
            target="_blank"
          >
            <BiLogoLinkedinSquare size={20} />
            Me siga no Linkedin
          </SocialContainer>
          <SocialContainer
            href="https://github.com/JoaoVitorOtavio"
            target="_blank"
          >
            <BiLogoGithub size={20} />
            Me siga no Github
          </SocialContainer>
          <SocialContainer
            $isTheLast
            target="_blank"
            href="mailto:seuemail@gmail.com?subject=Contato%20via%20Portfolio&body=Olá, gostaria de saber mais sobre..."
          >
            <BiMailSend size={20} />
            joaovitor2201@hotmail.com
          </SocialContainer>
        </ImageContainer>
      </ContainerDescription>
      <Title>Experiência de trabalho</Title>
      <br />
      <MenuContainer>
        {Works.map((item, index) => (
          <MenuItems
            title={item.enterpriseName}
            $isSelected={item.enterpriseName === enterprise}
            key={index}
            onClick={() => setEnterprise(item.enterpriseName)}
          >
            {handleEnterpriseName(item.enterpriseName)}
          </MenuItems>
        ))}
      </MenuContainer>
      {Works.map((item, index) => (
        <DescriptionContainer
          key={index}
          $isSelected={item.enterpriseName === enterprise}
        >
          <WorkTitleAndTime>
            <div>
              {item.role} @ {item.enterpriseName}
            </div>
            <TimeDescription>{item.time}</TimeDescription>
          </WorkTitleAndTime>
          <WorkDescription
            dangerouslySetInnerHTML={{
              __html: item.detailedDescription,
            }}
          ></WorkDescription>
          {/* <WorkDescription>{item.description}</WorkDescription> */}
          <ItemContainer>
            {item.techs!.map((tech, index) => (
              <TechItem key={index}>
                <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                {tech.name}
              </TechItem>
            ))}
          </ItemContainer>
        </DescriptionContainer>
      ))}
    </>
  );
}
