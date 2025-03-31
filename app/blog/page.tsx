'use client';

import { useEffect } from 'react';
import OnProgress from '../components/OnProgress/OnProgress';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog | João Vitor Otavio';
  }, []);

  return <OnProgress />;
}
