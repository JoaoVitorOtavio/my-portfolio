import Image from 'next/image';
import { Copy, DescriptionContainer, TagName } from './Footer.module';

const Footer = () => {
  return (
    <>
      <Image
        src="/wave.svg"
        alt=""
        layout="responsive"
        width={100}
        height={50}
        style={{ display: 'block' }} // Evita espaçamento extra
      />
      <DescriptionContainer>
        <TagName>{'< JoaoVitorOtavio />'}</TagName>
        <Copy>Copyright © João Vitor Otavio 2025</Copy>
        <Copy>All rights Reserved</Copy>
      </DescriptionContainer>
    </>
  );
};

export default Footer;
