import Head from 'next/head'
import Link from 'next/link'

type HelloData = {
  name: string
}

async function getData(): Promise<HelloData> {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/hello`)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <div>
        Home : {data.name}
        <br />
        <Link href="/about">about</Link>
      </div>
    </div>
  )
}
