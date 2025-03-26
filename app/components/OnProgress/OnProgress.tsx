'use client';

import Image from 'next/image';
import { Container, Description } from './OnProgress.module';

export default function OnProgress() {
  return (
    <Container>
      <Image
        src="/sisifo.gif"
        alt=""
        priority={false}
        width={300}
        height={300}
        unoptimized={true}
      />

      <Description>Em construção ...</Description>
    </Container>
  );
}
