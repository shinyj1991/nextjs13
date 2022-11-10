import Link from 'next/link'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/todo`)
  return res
}

export default async function Page() {
  const { message } = await getData()

  return (
    <div>
      <h1>To do list</h1>
      <p>{message}</p>
      <Link href="/">home</Link>
    </div>
  )
}
