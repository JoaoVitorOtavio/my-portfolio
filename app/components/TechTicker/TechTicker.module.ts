import styled, { keyframes } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MarqueeInner = styled.div`
  display: flex;
  gap: 10px;
  min-width: fit-content;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px 20px;
  background: #27272b66;
  border-radius: 5px;
`;

export const LineWrapper = styled.div`
  margin: auto;
  width: 100%;
  overflow: hidden;
`;

export const backRun = keyframes`
  from {
      transform: translateX(0%);
   }
   to {
      transform: translateX(-1662.42px);
   }
`;

export const frontRun = keyframes`
  from {
      transform: translateX(0%);
   }
   to {
      transform: translateX(-1864.36px);
   }
`;

interface IRunningLine {
  type: 'front' | 'back';
}
export const RunningLine = styled.div<IRunningLine>`
  font-size: 100px;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #444;
  white-space: nowrap;

  animation: ${(props) => (props.type === 'front' ? frontRun : backRun)} 20s
    linear infinite;
`;
