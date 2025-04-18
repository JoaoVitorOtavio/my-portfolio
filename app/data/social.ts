import { IconType } from 'react-icons';
import {
  BiLinkExternal,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { SiCodewars } from 'react-icons/si';

interface ISocial {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  status: string;
}

export const socialLinks: ISocial[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/JoaoVitorOtavio',
    icon: BiLogoGithub,
    status: 'social',
  },
  {
    id: 2,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/joaovitorotavio',
    icon: BiLogoLinkedinSquare,
    status: 'social',
  },
  // {
  //   id: 3,
  //   name: 'Steam',
  //   url: 'https://steamcommunity.com/id/BobJhon/',
  //   icon: BiLogoSteam,
  //   status: 'social',
  // },
  {
    id: 4,
    name: 'Daily.dev',
    url: 'https://app.daily.dev/joovitorotavio',
    icon: BiLinkExternal,
    status: 'social',
  },
  {
    id: 5,
    name: 'Codewars',
    url: 'https://www.codewars.com/users/JoaoVitorOtavio',
    icon: SiCodewars,
    status: 'social',
  },
];
