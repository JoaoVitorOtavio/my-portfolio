import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
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
`;

export const YearsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

interface IYearButton {
  isActivated: boolean;
}

export const YearButton = styled.div<IYearButton>`
  font-weight: 500;
  line-height: 1.25rem;
  color: ${(props) => (props.isActivated ? '#000' : '#fff')};
  padding: 8px 16px;
  border: 1px solid #27272b66;
  border-radius: 8px;
  background-color: ${(props) => (props.isActivated ? '#0cce6b' : '#27272b66')};
`;
