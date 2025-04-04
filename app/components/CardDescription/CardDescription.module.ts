import styled from 'styled-components';

export const DescriptionCard = styled.div`
  border-radius: 25px;
  line-height: 25px;
  // background-color: #71717a;
  background-color: #2c2c2e;
  color: #a1a1aa;
  padding: 5%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 42%;
    padding: 3%;
  }
`;

export const DescriptionCardContainer = styled.div`
  margin: 5px 0;
`;

export const TopicContainer = styled.div`
  padding: 0 0 8px 5px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

interface IEmphasis {
  $color?: string;
}

export const Emphasis = styled.b<IEmphasis>`
  // font-weight: 600;
  color: ${(props) => props.$color || '#fff'};
`;
