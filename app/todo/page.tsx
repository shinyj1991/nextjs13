import Link from 'next/link'

type TodoItem = {
  message: string
  success: boolean
}

async function getData(): Promise<TodoItem> {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/todo`)
  return res.json()
}

export default async function Page() {
  const data = await getData()

  console.log(data)

  return (
    <div>
      <h1>To do list</h1>
      <Link href="/">home</Link>
    </div>
  )
}
