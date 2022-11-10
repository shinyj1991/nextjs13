import Link from 'next/link'

type HelloData = {
  message: string
  success: boolean
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
        {data.message}
        <br />
        <Link href="/todo">todo</Link>
      </div>
    </div>
  )
}
