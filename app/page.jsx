import Link from 'next/link'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/hello`)
  return res.json()
}

export default async function Page() {
  const { data } = await getData()

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
