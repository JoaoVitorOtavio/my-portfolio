import { GoTriangleRight } from 'react-icons/go';

import {
  DescriptionCard,
  DescriptionCardContainer,
  Emphasis,
  TopicContainer,
} from './CardDescription.module';

interface ICardDescription {
  title: string;
  description: React.ReactNode;
  topics: string[];
}
const CardDescription = ({ description, title, topics }: ICardDescription) => {
  return (
    <DescriptionCard>
      <div>
        <Emphasis $color="#0cce6b">{title}</Emphasis>
      </div>
      <DescriptionCardContainer>{description}</DescriptionCardContainer>
      {topics.map((topic, index) => (
        <TopicContainer key={index}>
          <GoTriangleRight size={20} color="#0cce6b" />{' '}
          <Emphasis>{topic}</Emphasis>
        </TopicContainer>
      ))}
    </DescriptionCard>
  );
};

export default CardDescription;
