import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin-bottom: 60px;
  display: flex;
`;

export const ImageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 15%;
  }
`;

export const TimeLineContainer = styled.div`
  height: 80px;
`;

interface ITimeline {
  isTheFirst: boolean;
}

export const Timeline = styled.div<ITimeline>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: ${(props) => (props.isTheFirst ? '0px' : '350px')};
    background-color: #27272b66;
    left: 50%;
    top: -1px;
    transform: translateX(-50%);
  }
`;

export const EnterpriseInfoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 16px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 85%;
  }
`;

export const NameAndRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const EnterpriseName = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;

export const Role = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const EnterpriseTime = styled.p`
  color: #71717a;
  font-size: 14px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: #a1a1aa;
  letter-spacing: -0.4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border-radius: 6px;
  border-width: 1px;
  max-width: 80px;
  max-height: 80px;

  background-color: #27272b66;

  position: relative;
  z-index: 1;
`;
