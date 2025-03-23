import Image from 'next/image';
import {
  ContentContainer,
  Description,
  EnterpriseInfoContainer,
  EnterpriseName,
  EnterpriseTime,
  ImageContainer,
  ImageContentContainer,
  NameAndRoleContainer,
  Role,
  Timeline,
  TimeLineContainer,
} from './WorkExperience.module';
import { IWorkExperience } from './interfaces';

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
          <Timeline $isTheFirst={isTheFirst}></Timeline>
        </TimeLineContainer>
      </ImageContentContainer>
      <EnterpriseInfoContainer>
        <NameAndRoleContainer>
          <EnterpriseName>{enterpriseName}</EnterpriseName>
          <Role>{role}</Role>
        </NameAndRoleContainer>
        <EnterpriseTime>{time}</EnterpriseTime>
        <Description>{description}</Description>
      </EnterpriseInfoContainer>
    </ContentContainer>
  );
};

export default WorkExperience;
