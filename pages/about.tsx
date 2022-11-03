import Head from 'next/head'
import Link from 'next/link'
import styled from "styled-components"

const AboutTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 50px;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutTitle>About</AboutTitle>
      <Link href="/">home</Link>
    </div>
  )
}
