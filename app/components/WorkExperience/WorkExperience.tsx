import Image from 'next/image';
import {
  ContentContainer,
  Description,
  EnterpriseInfoContainer,
  EnterpriseName,
  EnterpriseTime,
  ImageContainer,
  ImageContentContainer,
  Role,
  Timeline,
  TimeLineContainer,
} from './WorkExperience.module';

interface IWorkExperience {
  enterpriseName: string;
  role: string;
  time: string;
  description: string;
  imagePath: string;
  isTheFirst?: boolean;
}

const WorkExperience = ({
  enterpriseName,
  description,
  imagePath,
  role,
  time,
  isTheFirst = false,
}: IWorkExperience) => {
  return (
    <ContentContainer>
      <ImageContentContainer>
        <ImageContainer>
          <Image width={50} height={50} src={imagePath} alt="Enterprise Logo" />
        </ImageContainer>
        <TimeLineContainer>
          <Timeline isTheFirst={isTheFirst}></Timeline>
        </TimeLineContainer>
      </ImageContentContainer>
      <EnterpriseInfoContainer>
        <div>
          <EnterpriseName>{enterpriseName}</EnterpriseName>
          <Role>{role}</Role>
        </div>
        <EnterpriseTime>{time}</EnterpriseTime>
        <Description>{description}</Description>
      </EnterpriseInfoContainer>
    </ContentContainer>
  );
};

export default WorkExperience;
