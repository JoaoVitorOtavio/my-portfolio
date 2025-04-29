import { IWorkExperience } from '../components/WorkExperience/interfaces';
import icons from '../assets/icons/icons';

export const Works: IWorkExperience[] = [
  {
    enterpriseName: 'Sonoma Market',
    description:
      'Desenvolvi e mantive sistemas usando ReactJS, NextJS, Node.js e NestJS, incluindo um backoffice integrado ao ERP Millennium, um marketplace completo e uma solução para transferência de produtos entre marketplaces. Também criei um Design System com Storybook e atuei em um projeto freelance de gestão de vendas.',
    imagePath: '/sonoma_logo.jpg',
    role: 'Full Stack Developer',
    time: 'Jun, 2021 - Mar, 2025',
    techs: [
      { name: 'React', icon: icons.react },
      { name: 'Next', icon: icons.nextjs },
      { name: 'Typescript', icon: icons.typescript },
      { name: 'Node', icon: icons.nodejs },
      { name: 'Nest', icon: icons.nestjs },
      { name: 'MySQL', icon: icons.mysql },
      { name: 'PostgreSQL', icon: icons.postgresql },
      { name: 'Git', icon: icons.git },
      { name: 'Jest', icon: icons.jest },
      { name: 'Swagger', icon: icons.swagger },
      { name: 'Docker', icon: icons.docker },
      { name: 'Firebase', icon: icons.firebase },
      { name: 'Prisma', icon: icons.prisma },
      { name: 'Sequelize', icon: icons.sequelize },
      { name: 'Redux', icon: icons.redux },
      { name: 'Styled Components', icon: icons.styledcomponents },
      { name: 'Storybook', icon: icons.storybook },
      { name: 'React Query', icon: icons.reactquery },
    ],
    link: 'https://www.sonoma.com.br/',
    detailedDescription: `
      <b>Marketeplace:</b> Participação no desenvolvimento de um marketplace usando <b>Next.js</b>, <b>TypeScript</b>, <b>React Query</b>, <b>Node.js</b>, <b>Sequelize</b> e <b>Styled Components</b>.<br><br>
      <b>Backoffice:</b> Desenvolvimento de um sistema de backoffice em <b>ReactJS</b> com <b>Node/Express</b>, integrado ao <b>ERP Millennium</b> e à plataforma <b>VTEX</b> (posteriormente migrado para <b>Magento</b>), garantindo alto desempenho e eficiência operacional.<br><br>
      <b>Design System:</b> Criação e documentação de um <b>Design System</b> exclusivo com <b>Storybook</b>, para otimizar a consistência de design e a colaboração entre equipes.<br><br>
      <b>Integração de Marketplaces:</b> Desenvolvimento de uma plataforma de intermediação para transferência de produtos entre e-commerces/marketplaces, utilizando <b>NestJS</b>, <b>Jest</b>, <b>Prisma</b>, <b>Postgres</b> e <b>Axios</b>. Projeto assegurou migração de dados contínua e sem interrupções.<br><br>
      <b>Sistema para Consultores de Vendas (Freelance):</b> Criação de uma plataforma para consultores de vendas em <b>Node.js</b> e <b>React</b>, com integração ao <b>ERP</b> para registro de transações, otimizando o controle de vendas e formalização de pagamentos.
    `,
  },
  {
    enterpriseName: 'VIAMAKER Education',
    description:
      'Responsável pelo desenvolvimento do front end de uma plataforma com o objetivo de planejar e criar trilhas de ensino por parte dos professores e execução das aulas para os alunos.',
    imagePath: '/viamaker_logo.jpg',
    role: 'Front End',
    time: 'Jan, 2021 - Mai, 2021',
    techs: [
      { name: 'React', icon: icons.react },
      { name: 'Redux', icon: icons.redux },
      { name: 'MongoDB', icon: icons.mongodb },
      { name: 'Git', icon: icons.git },
    ],
    link: 'https://viamaker.com/',
    detailedDescription: `
      <b>Responsável pelo desenvolvimento</b> do front end de uma plataforma com o objetivo de planejar e criar <b>trilhas de ensino</b> por parte dos professores e execução das aulas para os alunos. <br />
    `,
  },
  {
    enterpriseName: 'UKOR',
    description:
      'Desenvolvi projetos para melhorar a experiência do usuário e otimizar ferramentas da empresa, como um aplicativo de saúde e bem-estar em React Native, Redux e Node.js, um portal administrativo em ReactJS, Node.js e Redux para gestão de operações e dados, e landing pages otimizadas para divulgação e engajamento do público.',
    imagePath: '/ukor_logo.jpg',
    role: 'Full Stack Developer / Mobile',
    time: 'Abr, 2019 - Jan, 2021',
    techs: [
      { name: 'React', icon: icons.react },
      { name: 'React Native', icon: icons.react },
      { name: 'Node', icon: icons.nodejs },
      { name: 'Redux', icon: icons.redux },
      { name: 'Sequelize', icon: icons.sequelize },
      { name: 'Firebase', icon: icons.firebase },
      { name: 'Git', icon: icons.git },
      { name: 'MySQL', icon: icons.mysql },
      { name: 'PostgreSQL', icon: icons.postgresql },
    ],
    link: 'https://ukor.com.br/',
    detailedDescription: `
      <b>Aplicativo de Saúde e Bem-Estar</b>: Desenvolvimento em <b>React Native</b> com <b>Redux</b> e <b>Node.js</b>, oferecendo suporte a usuários na melhoria de saúde física e mental.<br />
      <br/><b>Portal Administrativo</b>: Implementação de um portal em <b>ReactJS</b> e <b>Node.js</b>, permitindo controle eficiente de operações e funcionalidades do aplicativo.<br />
      <br/><b>Landing Pages para Divulgação</b>: Criação de <b>landing pages</b> otimizadas para promover funcionalidades e serviços da empresa, aumentando alcance e engajamento do público.
    `,
  },
  {
    enterpriseName: 'CIEE - Centro de Integração Empresa-Escola',
    description:
      'Responsável por auxiliar e fornecer suporte a professores para criação e aplicações de aulas pré programadas para os alunos, também responsável por cuidar do laboratório em geral e dos demais computadores do local.',
    imagePath: '/ciee_logo.jpg',
    role: 'Laboratorista',
    time: 'Fev, 2018 - Abr, 2019',
    isTheFirst: true,
    techs: [
      { name: 'HTML', icon: icons.html },
      { name: 'CSS', icon: icons.css },
      { name: 'Javascript', icon: icons.javascript },
      { name: 'Firebase', icon: icons.firebase },
      { name: 'Git', icon: icons.git },
    ],
    link: 'https://portal.ciee.org.br/',
    detailedDescription: `
      Responsável por auxiliar e fornecer suporte a professores para criação e aplicações de aulas pré programadas para os alunos, também responsável por cuidar do laboratório em geral e dos demais computadores do local.
    `,
  },
];
