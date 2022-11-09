import Link from 'next/link'

type TodoItem = {
  data: any
}

async function getData(): Promise<TodoItem> {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/todo`)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <h1>To do list</h1>
      <p>title: {data.data.title}</p>
      <Link href="/">home</Link>
    </div>
  )
}
