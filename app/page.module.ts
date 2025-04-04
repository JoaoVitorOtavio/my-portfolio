import styled from 'styled-components';

export const Main = styled.main``;

export const PhotoContainer = styled.div`
  position: absolute;
  justify-content: space-around;
  display: flex;

  width: 100%;
  left: 0;
  top: 130px;
  background-image: url('Linhas-tech.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
`;

export const TitleAndImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  flex-direction: column;
  margin-top: 290px;
`;

export const DescriptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const DescriptionAndIcon = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    display: flex;
  }
`;

export const AboutContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    width: 70%;
  }
`;

export const Description = styled.p`
  color: #a1a1aa;
  margin-bottom: 30px;
  font-size: 16px;
  text-align: center;

  line-height: 25px;
`;

export const Title = styled.h1`
  line-height: 1.25;
  color: #fff;
  font-weight: 700;
  text-align: center;

  margin-bottom: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 30px;
  }
`;

export const SocialIcon = styled.div`
  font-size: 20px;
  color: #71717a;
  display: flex;
  align-items: center;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialLinks = styled.a`
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 5px;

  color: #fff;
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 0.5px;

  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-color: #27272a;

  &:hover ${SocialIcon} {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface IEmphasis {
  $color?: string;
}

export const Emphasis = styled.b<IEmphasis>`
  color: ${(props) => props.$color || '#fff'};
`;

export const LetsTalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
  color: #a1a1aa;
`;
