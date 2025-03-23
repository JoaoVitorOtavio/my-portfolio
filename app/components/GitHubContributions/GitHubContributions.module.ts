import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 90px 0;
`;

export const ContentContainer = styled.div`
  // @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
  //   display: flex;
  // }
`;
export const Title = styled.h1`
  line-height: 3.7rem;
  color: #fff;
  font-weight: 700;

  margin-bottom: 30px;
`;

export const CalendarContainer = styled.div`
  color: #fff;
  background-color: #27272b66;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    width: 90%;
  }
`;

export const YearsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 60px;

  // @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
  //   // background-color: red;
  //   padding: 0 10px;
  //   width: 10%;
  //   margin-bottom: 15px;
  //   justify-content: center;
  // }
`;

interface IYearButton {
  $isactivated: boolean;
}

export const YearButton = styled.div<IYearButton>`
  font-weight: 500;
  line-height: 1.25rem;
  color: ${(props) => (props.$isactivated ? '#000' : '#fff')};
  padding: 8px 16px;
  border: 1px solid #27272b66;
  border-radius: 8px;
  background-color: ${(props) => (props.$isactivated ? '#0cce6b' : '#27272b66')};

  cursor: pointer;
  &:hover {
    border: 1px solid #3f3f46;
  }
  // @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
  //   width: 40%;
  //   text-align: center;
  //   height: auto;

  // }
`;
