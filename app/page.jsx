import Link from 'next/link'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/hello`)
  return res.json()
}

export default async function Page() {
  const { message } = await getData()

  return (
    <div>
      <div>
        {message}
        <br />
        <Link href="/todo">todo</Link>
      </div>
    </div>
  )
}
