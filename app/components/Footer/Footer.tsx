import Image from 'next/image';
import { Copy, DescriptionContainer, TagName } from './Footer.module';

const Footer = () => {
  return (
    <>
      <Image
        src="/wave.svg"
        alt=""
        style={{ width: '100%', objectFit: 'contain', height: 'auto' }}
        width={100}
        height={50}
      />
      <DescriptionContainer>
        <TagName>{'< JoaoVitorOtavio / >'}</TagName>
        <Copy>Copyright © João Vitor Otavio 2025</Copy>
        <Copy>All rights Reserved</Copy>
      </DescriptionContainer>
    </>
  );
};

export default Footer;
