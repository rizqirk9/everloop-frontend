import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return <Container>
    <Link href={'/events'}>Going to event page</Link>
  </Container>;
}
