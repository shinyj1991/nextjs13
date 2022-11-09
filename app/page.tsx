import Link from 'next/link'

type HelloData = {
  test: string
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
        {data.test}
        <br />
        <Link href="/todo">todo</Link>
      </div>
    </div>
  )
}
