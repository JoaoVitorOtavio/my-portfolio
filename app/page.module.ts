import styled from 'styled-components';

export const Main = styled.main``;

export const TitleAndImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  flex-direction: column;
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

  line-height: 25px;
`;

export const Title = styled.h1`
  line-height: 1.25;
  color: #fff;
  font-weight: 700;

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
