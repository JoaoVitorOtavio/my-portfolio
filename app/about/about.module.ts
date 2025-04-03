import styled from 'styled-components';

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 1.25;
  letter-spacing: -0.025em;
  font-weight: 600;

  color: #fff;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #a1a1aa;
  line-height: 1.625;
  margin: 25px 0;
`;

export const ImageContainer = styled.div`
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 25px;
`;

export const TiltedImage = styled.div`
  width: 68%;
  height: 500px;
  transform: perspective(0px);

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    transform: rotate(5deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(0deg);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  width: 100%;
`;

export const CVButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.25rem;
  color: #fff;
  padding: 15px 16px;
  border: 1px solid #27272b66;
  border-radius: 8px;
  background-color: #27272b66;

  cursor: pointer;
  &:hover {
    border: 1px solid #3f3f46;
  }
`;

interface ISocialContainer {
  $isTheLast?: boolean;
}

export const SocialContainer = styled.a<ISocialContainer>`
  margin-top: 25px;
  padding-top: 25px;
  margin-bottom: ${(props) => (props.$isTheLast ? '25px' : '0')};
  padding-bottom: ${(props) => (props.$isTheLast ? '25px' : '0')};
  width: 50%;
  border-top: 1px solid #27272b66;
  border-bottom: ${(props) => (props.$isTheLast ? '1px solid #27272b66' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 5px;
  cursor: pointer;

  &:hover {
    color: #0cce6b;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-y: auto; /* Scroll vertical */
  padding: 15px 0 10px 0;
`;

interface IIsSelected {
  $isSelected?: boolean;
}

export const MenuItems = styled.div<IIsSelected>`
  cursor: pointer;
  white-space: nowrap;
  padding: 10px;
  // border: 1px solid #27272b;
  border-radius: 8px;

  color: ${(props) => (props.$isSelected ? '#000' : '#fff')};
  background-color: ${(props) => (props.$isSelected ? '#0cce6b' : '#27272b66')};
  font-weight: ${(props) => (props.$isSelected ? '600' : '500')};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? '#0cce6b' : '#3f3f46')};
  }
`;

export const DescriptionContainer = styled.div<IIsSelected>`
  position: relative;
  display: ${(props) => (props.$isSelected ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 350px;
  // height: 550px;
  background-color: #27272b66;
  border-radius: 8px;
  padding: 50px 20px 30px 20px;
  margin: 15px 0 50px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    height: auto;
    min-height: 250px;
  }
`;

export const WorkDescription = styled(Description)`
  text-align: center;
`;

export const WorkTitleAndTime = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  gap: 10px;
`;

export const TimeDescription = styled.p`
  font-size: 12px;
  color: #a1a1aa;
`;

export const ItemContainer = styled.div`
  // background-color: red;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TechItem = styled.div`
  line-height: 25px;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  gap: 5px;

  color: #fff;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 0.5px;

  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-color: #27272a;
`;
